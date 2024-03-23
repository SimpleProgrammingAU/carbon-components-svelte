import type { SvelteComponentTyped } from "svelte";

export interface LayerProps {
  /**
   * Specify the layer level to override any existing levels based on hierarchy.
   * @default undefined
   */
  level?: 0 | 1 | 2;

  /**
   * Specify the HTML element to render.
   * @default "div"
   */
  as?: string;

  /**
   * Specify the Layer HTML element props
   * @default {}
   */
  layerProps?: import("svelte/elements").HTMLElementAttributes;
}

export default class Layer extends SvelteComponentTyped<
  LayerProps,
  Record<string, any>,
  { default: {} }
> {}