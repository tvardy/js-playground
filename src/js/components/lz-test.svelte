<script>
  import { fake, datatype } from 'faker'
  import lzw from 'lzwcompress'
  import { pack, constants } from '../lz-chat_common.js'

  function Record() {
    return {
      id: datatype.uuid(),
      firstName: fake('{{name.firstName}}'),
      lastName: fake('{{name.lastName}}'),
      avatarUrl: fake('{{image.avatar}}'),
      email: fake('{{internet.email}}'),
      phone: fake('{{phone.phoneNumberFormat}}'),
      isPremium: datatype.boolean(),
      list: Array.from({ length: datatype.number({ min: 10, max: 15 }) }, ChildRecord)
    }
  }

  function ChildRecord() {
    return {
      id: datatype.uuid(),
      title: fake('{{commerce.productName}}'),
      amount: datatype.number({ min: 10, max: 20 }),
      created: new Date(fake('{{date.past}}')).toISOString()
    }
  }

  function generate(length) {
    return Array.from({ length }, Record)
  }

  function handleKeyDown(e) {
    if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      data = null
    }

    if (e.which === 13) {
      e.preventDefault()
      run()
    }
  }

  function run() {
    numberOfRecords = parseInt(numberOfRecords)

    if (numberOfRecords > 0) {
      data = []

      setTimeout(() => {
        data = generate(numberOfRecords)
      }, 0)
    }
  }


  $: processing = Array.isArray(data) && !data.length
  $: ready = Array.isArray(data) && data.length

  $: values.json = JSON.stringify(data)
  $: values.jsonPretty = JSON.stringify(data, null, 2)
  $: values['10'] = lzw.pack(values.json).join(constants.compress.sep)
  $: values['32'] = pack(data)

  $: lengths.json = values.json.length
  $: lengths['10'] = values['10'].length
  $: lengths['32'] = values['32'].length

  $: percentage['10'] = (lengths['10'] / lengths.json * 100).toFixed(2)
  $: percentage['32'] = (lengths['32'] / lengths.json * 100).toFixed(2)

  let numberOfRecords = 0
  let data = null
  let values = {
    json: null,
    jsonPretty: null,
    10: null,
    32: null
  }
  let lengths = {
    json: null,
    10: null,
    32: null
  }
  let percentage = {
    10: null,
    32: null
  }
</script>

<div class="lz-input">
  How many records to create:
  <span
    contenteditable
    on:keydown={ handleKeyDown }
    bind:innerHTML={ numberOfRecords }
  >
    { numberOfRecords }
  </span>
</div>

{#if processing}
<pre class="lz-result">creating data...</pre>
{/if}

{#if ready}
<pre class="lz-result">
Number of records: { numberOfRecords }
JSON string length: { lengths.json }
Zipped decimals string length: { lengths['10'] } ({ percentage['10'] } %)
Zipped 32-bit string length: { lengths['32'] } ({ percentage['32'] } %)
</pre>
<div class="lz-data">
  <details>
    <summary>toggle data</summary>
    <pre>{ values.jsonPretty }</pre>
  </details>
</div>
{/if}
