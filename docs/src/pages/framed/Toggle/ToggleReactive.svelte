<script>
  import { Toggle, Button } from "carbon-components-svelte";

  let toggled = true;
</script>

<Toggle labelText="Push notifications" bind:toggled="{toggled}" />

<div>
  <Button size="small" on:click="{() => (toggled = !toggled)}">
    Toggle
    {toggled ? "off" : "on"}
  </Button>
</div>

<div>Toggled: {toggled}</div>

<style>
  div {
    margin-top: var(--bx-spacing-05);
  }
</style>
