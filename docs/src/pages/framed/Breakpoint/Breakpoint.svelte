<script>
  import { Breakpoint } from "carbon-components-svelte";

  let size;
  let events = [];
</script>

<Breakpoint
  bind:size="{size}"
  on:change="{(e) => (events = [...events, e.detail])}"
/>

<p>Resize the width of your browser.</p>
<h6>Breakpoint size</h6>
<h1>{size}</h1>

<h6>on:change</h6>
<pre>{JSON.stringify(events, null, 2)}</pre>

<style>
  p,
  h1 {
    margin-bottom: var(--bx-spacing-08);
  }

  h6 {
    margin-bottom: var(--bx-spacing-03);
  }
</style>
