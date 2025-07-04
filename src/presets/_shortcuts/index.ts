import type { Preset, StaticShortcutMap } from "@unocss/core";
import { btn } from "./_btn.js";
//import { card } from './card'

export const shortcuts = [...btn] as Exclude<
  Preset["shortcuts"],
  undefined | StaticShortcutMap
>;
