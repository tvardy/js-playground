<script>
  import pSeries from 'p-series'
  import FakerWorker from '../tools/FakeJSONDataWorker.js'
  import CompressionWorker from '../tools/CompressionWorker.js'

  let generating = false
  let compressing = false
  let ready = false
  let numberOfRecords = 0
  let data = null

  const TYPES = [
    'lzwDec',
    'lzw32',
    'b64deflate',
    'b64gzip',
    'utf16deflate',
    'utf16gzip'
  ]
  const values = {
    json: null,
    jsonPretty: null
  }
  const lengths = { json: null }
  const percentage = {}

  $: ready = data && !generating && !compressing

  function handleKeyDown (e) {
    if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      data = null
    }

    if (e.which === 13) {
      e.preventDefault()
      run()
    }
  }

  async function run () {
    numberOfRecords = parseInt(numberOfRecords)

    if (numberOfRecords > 0) {
      generating = true
      data = await _generate()
      generating = false

      values.json = JSON.stringify(data)
      lengths.json = values.json.length
      values.jsonPretty = JSON.stringify(data, null, 2)

      compressing = true
      const packed = await pSeries(_pack())
      compressing = false

      TYPES.forEach((type, index) => {
        values[type] = packed[index]
        lengths[type] = values[type].length
        percentage[type] = ((lengths[type] / lengths.json) * 100).toFixed(2)
      })
    }
  }

  async function _generate () {
    return FakerWorker.run.generate(numberOfRecords)
  }

  function _pack () {
    return TYPES.map(type => () => CompressionWorker.run[type](values.json))
  }
</script>

<div class="lz-input">
  How many records to create:
  <span contenteditable on:keydown={handleKeyDown} bind:innerHTML={numberOfRecords}>
    {numberOfRecords}
  </span>
</div>

{#if generating}
  <pre class="lz-result">creating data...</pre>
{/if}

{#if compressing}
  <pre class="lz-result">compressing data...</pre>
{/if}

{#if ready}
  <pre
    class="lz-result">
Number of records: { numberOfRecords }
JSON string length: { lengths.json }

<strong>Compression type results:</strong>
{#each TYPES as type}
{ type }: { lengths[type] } ({ percentage[type] } %)<br>
{/each}
</pre>
  <div class="lz-data">
    <details>
      <summary>toggle JSON data</summary>
      <pre>{ values.jsonPretty }</pre>
    </details>
  </div>
  {#each TYPES as type}
  <div class="lz-data wrap">
    <details>
      <summary>{ type }</summary>
      <pre>{ values[type] }</pre>
    </details>
  </div>  
  {/each}
{/if}
