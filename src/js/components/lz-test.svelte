<script>
  import lzw from 'lzwcompress'
  import { pack, compress } from '../utils/lzip.js'
  import worker from '../tools/FakeJSONDataWorker.js'

  let processing
  let ready

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
      data = []

      data = await worker.run.generate(numberOfRecords)
    }
  }

  let numberOfRecords = 0
  let data = null

  const values = {
    json: null,
    jsonPretty: null,
    10: null,
    32: null
  }
  const lengths = {
    json: null,
    10: null,
    32: null
  }
  const percentage = {
    10: null,
    32: null
  }

  $: processing = Array.isArray(data) && !data.length
  $: ready = Array.isArray(data) && data.length

  $: values.json = JSON.stringify(data)
  $: values.jsonPretty = JSON.stringify(data, null, 2)
  $: values['10'] = lzw.pack(values.json).join(compress.sep)
  $: values['32'] = pack(data)

  $: lengths.json = values.json.length
  $: lengths['10'] = values['10'].length
  $: lengths['32'] = values['32'].length

  $: percentage['10'] = ((lengths['10'] / lengths.json) * 100).toFixed(2)
  $: percentage['32'] = ((lengths['32'] / lengths.json) * 100).toFixed(2)
</script>

<div class="lz-input">
  How many records to create:
  <span contenteditable on:keydown={handleKeyDown} bind:innerHTML={numberOfRecords}>
    {numberOfRecords}
  </span>
</div>

{#if processing}
  <pre class="lz-result">creating data...</pre>
{/if}

{#if ready}
  <pre
    class="lz-result">
Number of records: { numberOfRecords }
JSON string length: { lengths.json }
Zipped decimals string length: { lengths['10'] } ({ percentage['10'] } %)
Zipped 32-bit string length: { lengths['32'] } ({ percentage['32'] } %)
</pre>
  <div class="lz-data">
    <details>
      <summary>toggle JSON data</summary>
      <pre>{ values.jsonPretty }</pre>
    </details>
  </div>
  <div class="lz-data wrap">
    <details>
      <summary>toggle LZipped decimal data</summary>
      <pre>{ values[10] }</pre>
    </details>
  </div>
  <div class="lz-data wrap">
    <details>
      <summary>toggle LZipped 32-bit data</summary>
      <pre>{ values['32'] }</pre>
    </details>
  </div>
{/if}
