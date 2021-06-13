import { defineWindiSetup } from "@slidev/types"
// import windiConfig from '../windi.config.js'
export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        vgreen: "#41B883",
        vblue: "#34495E",
      },
    },
  },
}))