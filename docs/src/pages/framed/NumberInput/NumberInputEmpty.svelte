<script>
  import { NumberInput, Button } from "carbon-components-svelte";

  let value = null;
</script>

<NumberInput allowEmpty bind:value="{value}" />

<div style="margin: var(--bx-spacing-05) 0">
  <Button on:click="{() => (value = null)}">Set to null</Button>
  <Button on:click="{() => (value = 0)}">Set to 0</Button>
</div>

<strong>Value:</strong>
{value}
