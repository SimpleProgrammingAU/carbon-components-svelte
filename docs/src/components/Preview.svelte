<script>
  export let code = "";
  export let codeRaw = "";
  export let src = "";
  export let framed = false;

  import copy from "clipboard-copy";
  import { CodeSnippet, Button } from "carbon-components-svelte";
  import Launch from "carbon-icons-svelte/lib/Launch.svelte";
  import { url } from "@sveltech/routify";
  import { theme } from "../store";

  $: themedSrcUrl = $url(`${src}?theme=${$theme}`);
</script>

<div class="preview">
  {#if framed}
    <div class="framed-header">
      <div style="margin-left: var(--bx-spacing-05); color: var(--bx-text-02)">
        Content loaded in an iframe
      </div>
      <Button
        style="margin-left: auto;"
        kind="ghost"
        target="_blank"
        size="field"
        href="{themedSrcUrl}"
        icon="{Launch}"
      >
        Open in new tab
      </Button>
    </div>
  {/if}
  <div class="preview-viewer" class:framed="{framed}">
    {#if framed}
      <iframe title="{src.split('/').pop()}" src="{themedSrcUrl}"></iframe>
    {:else}
      <slot />
    {/if}
  </div>
  <div class="code-override">
    <CodeSnippet type="multi" code="{codeRaw}" copy="{(text) => copy(text)}">
      {@html code}
    </CodeSnippet>
  </div>
</div>

<style>
  .preview {
    margin-bottom: var(--bx-spacing-09);
    margin-left: -1rem;
    margin-right: -1rem;
    max-width: 66rem;
  }

  .code-override {
    border: 1px solid #262626;
  }

  .preview-viewer {
    border: 1px solid var(--bx-ui-03);
    border-bottom: 0;
    position: relative;
    z-index: 9999;
  }

  .preview-viewer:not(.framed) {
    padding: var(--bx-spacing-06) var(--bx-spacing-05);
  }

  .preview-viewer.framed {
    min-height: 20rem;
  }

  .framed-header {
    display: flex;
    align-items: center;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
