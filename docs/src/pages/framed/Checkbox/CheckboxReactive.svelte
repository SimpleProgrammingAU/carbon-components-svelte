<script>
  import { Checkbox, Button } from "carbon-components-svelte";

  let checked = false;
</script>

<Checkbox labelText="Label text" bind:checked="{checked}" />

<div style="margin: var(--bx-spacing-05) 0">
  <Button on:click="{() => (checked = !checked)}">Toggle</Button>
</div>

<strong>checked:</strong>
{checked}
