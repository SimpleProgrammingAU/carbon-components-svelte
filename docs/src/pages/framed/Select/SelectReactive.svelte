<script>
  import { Select, SelectItem, Button } from "carbon-components-svelte";

  let selected = "g10";
</script>

<Select labelText="Carbon theme" bind:selected="{selected}">
  <SelectItem value="white" text="White" />
  <SelectItem value="g10" text="Gray 10" />
  <SelectItem value="g90" text="Gray 90" />
  <SelectItem value="g100" text="Gray 100" />
</Select>

<div style="margin: var(--bx-spacing-05) 0">
  Selected: <strong>{selected}</strong>
</div>

<Button disabled="{selected === 'g90'}" on:click="{() => (selected = 'g90')}">
  Set to "g90"
</Button>
