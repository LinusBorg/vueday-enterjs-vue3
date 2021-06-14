---
# try also 'default' to start simple
theme: default
colorSchema: light
# random image from a curated Unsplash collection by Anthony
highlighter: shiki
# apply any windi css classes to the current slide
# class: 'text-center'
layout: cover
fonts:
  sans: 'Source Sans Pro'
---

# Vue 3 > Vue 2 + 1
Mehr als ein Major Release

---
title: Semver
---

<div class="mt-12 min-h-1"></div>
<div>

# Semver
 

Given a version number MAJOR.MINOR.PATCH, increment the

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards compatible manner, and
* PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
</div>


---

# Vue 3 ist ein "kleines" & großes Major Release
 

<div v-click="1" class="mt-8">
<div class="mb-4 font-bold">
 
 _~~klein~~_, nicht so groß in den API-Änderungen:

</div>

* Änderungen (breaking changes) sind zwar recht zahlreich...
* ..aber: Umfang und Komplexität überschaubar
* Wer eine Vue 2 App schreiben kann, kann mit Vue 3 direkt loslegen
</div>

<div v-click="2" class="mt-8">
<div class="mb-4 font-bold">
  groß, unter der Haube:
</div>

* neu geschrieben - in Typescript
* neue Features: Composition API<span class="text-red-500 text-xl">*</span>
* Compiler und VirtualDOM Implementierung neu und grundverschieden
* ermöglicht erhebliche Performancezugewinne

</div>

<div v-click="4" class="mt-8 mb-4 font-bold text-2xl">
  mehr als ein Major Release: ein KickStart
</div>


<div v-click="3" class="absolute bottom-4 right-3">
  <span class="text-red-500">*</span>: Nicht in diesem Talk inkludiert
</div>

---
layout: section

---

# Ein großes Major Release
## Was bedeutet das genau?

---
layout: big-bullets
heading: Alles auf Typescript
---

* Typescript ist überall
* Types können in IDEs auch bei JS code unterstützen
* Manuelle Pflege von Type in Vue 2
  * Mühsam
  * Fehleranfällig
  * unvollständig
* Types im Sourcecode machen Ihn für<br>Contributors besser navigierbar

---
layout: 'image-left'
image: '/vue-monorepo.png'
---

# Neue Source-Struktur

* Monorepo
* Packages mit klaren APIs und Verantwortlichkeiten
* Einfacher für neue Contributors

**Custom Renderer**

* core compiler DOM-unabhängig
* Community kann eigene Renderer bauen
* Bsp: <a href="https://troisjs.github.io/">Trois JS</a>
* "VueNative" wäre nun möglich

---
title: Trois JS
---

<iframe src="https://troisjs.github.io/examples/demos/1.html" width="900" height="500"></iframe>

---
layout: big-bullets
heading: Performance - Compiler & VirtualDOM
---

<div class="mt-8 min-h-1 text-2xl font-bold">
Compiler
</div>

<div class="mt-4">

* Blocks - flache Arrays mit _dynamischen_ Elementen
* Compiler Flags für _dynamische_ Elemente
* Hoisting von _statischen Elementen

</div>

<div v-click class="mt-8 min-h-1 text-2xl font-bold">
Virtual DOM
</div>

<div v-after class="mt-4">

* VNodes sind nun flache Objekte
* geringerer Memory Footprint
* schnelleres Diffing

</div>

---

# Ein Blick auf den Compiler

<div class="overflow-hidden absolute top-24 left-3 text-center">
  <iframe src="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8aDE+V2VsY29tZSE8L2gxPlxuICA8ZGl2IGNsYXNzPVwic3RhdGljXCI+XG4gICAgPE15Q29tcG9uZW50XG4gICAgICBwcm9wMT1cInN0YXRpY1wiXG4gICAgICA6c3VidGl0bGU9XCJzdWJ0aXRsZVwiXG4gICAgPlxuICAgICAgPHNwYW4+IHt7IG1zZyB9fTwvc3Bhbj5cbiAgICA8L015Q29tcG9uZW50PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJy4vTXlDb21wb25lbnQudnVlJ1xuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIE15Q29tcG9uZW50LFxuICAgIH0sXG4gICAgc2V0dXAoKSB7XG5cdFx0XHRjb25zdCBtc2cgPSAnSGVsbG8gV29ybGQhJ1xuXHRcdFx0Y29uc3Qgc3VidGl0bGUgPSByZWYoJ1RoaXMgaXMgdGhlIHN1YnRpdGxlJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1zZywgc3VidGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsIk15Q29tcG9uZW50LnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPHNsb3QgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydwcm9wMScsICdzdWJ0aXRsZSddXG59XG48L3NjcmlwdD4ifQ=="
    width="960"
    height="460"
    class="-mt-14 mb-2"
></iframe>
<a 
class="text-blue-600 underline"
href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8aDE+V2VsY29tZSE8L2gxPlxuICA8ZGl2IGNsYXNzPVwic3RhdGljXCI+XG4gICAgPE15Q29tcG9uZW50XG4gICAgICBwcm9wMT1cInN0YXRpY1wiXG4gICAgICA6c3VidGl0bGU9XCJzdWJ0aXRsZVwiXG4gICAgPlxuICAgICAgPHNwYW4+IHt7IG1zZyB9fTwvc3Bhbj5cbiAgICA8L015Q29tcG9uZW50PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJy4vTXlDb21wb25lbnQudnVlJ1xuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIE15Q29tcG9uZW50LFxuICAgIH0sXG4gICAgc2V0dXAoKSB7XG5cdFx0XHRjb25zdCBtc2cgPSAnSGVsbG8gV29ybGQhJ1xuXHRcdFx0Y29uc3Qgc3VidGl0bGUgPSByZWYoJ1RoaXMgaXMgdGhlIHN1YnRpdGxlJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1zZywgc3VidGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsIk15Q29tcG9uZW50LnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPHNsb3QgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydwcm9wMScsICdzdWJ0aXRsZSddXG59XG48L3NjcmlwdD4ifQ=="
>
sfc.vuejs.org</a>
</div>

---

# Wo steht das Vue Framework?
Offizielle Libraries

<div class="mt-4 min-h-1"></div>

<div class="flex">
  <div class="flex-grow">

  **Stable**

  * Vue 3.0 (_18.09.2020_)
  * Vue CLI (Vue 3 Support) (_18.09.2020_)
  * eslint-plugin-vue 7.0 (_30.09.2021_)
  * vue-loader 16.0 (_25.11.2021_)
  * Vue Router 3.0 (_07.12.2021_)
  * Vuex 4.0 (_02.02.2021_)

  </div>

  <div v-click class="flex-grow">

  **Release Candidate**
  * @vue/test-utils - 2.0.0-rc.6
  
  </div>

  <div v-click class="flex-grow">

  **Beta**

  * vue-devtools 6.0.0-beta.11
  * rollup-plugin-vue: 6.0.0-beta.11
  </div>

</div>

<hr v-click class="border-t-2 border-vgreen w-xl mt-8">
<div v-after class="mt-4">

* Offizielles Ökosystem fast vollständig stable
* Q1/Q2 2021 wichtige Stablisierungsphase
* Vue 3 bekam 11 Patch releases und erstes Minor Release 3.1 (07.06.2021)

</div>

---

# Community Ökosystem

<div class="mt-12 min-h-1"></div>

<div class="flex">
  <div class="flex-grow">
  
  **Frameworks**

  * Ant Design Vue - <Badge type="success">stable</Badge>
  * Element-Plus - <Badge type="success">stable</Badge>
  * Quasar - <Badge type="warn">Beta</Badge>
  * Vuetify - <Badge type="warn">Alpha</Badge>
  * Nuxt - <Badge type="info">First beta announced</Badge>
  * ChakraUI/Vue <Badge>under development</Badge>

  </div>

  <div class="flex-grow">

  **Integrationen**

  * VSCode
  * Jetbrains Webstorm / PHPStorm etc
  * Storybook <code>v6.3</code>
  * Cypress
  * Vite

  </div>
</div>

---

# Next -> Latest
 
<div class="mt-12 min-h-1" ></div>

Bisher:

```bash
npm i vue@next
```

Ab Q3-2021:

```bash
npm i vue
```


---

# Vue 3 Contributions

* Vue 3:
  * 1.372 gemergte PRs
  * 234 Contributors 
  * ...seit Alpha release seit 03.01.2020
* im Vergleich: Vue 2
  * 1.036 merged PRs
  * 399 Contributors
  * ... seit 11.06.2016

PS: Vue 2 wird morgen quasi 5 Jahre alt! 🥳

---
layout: section
---

# Ein "kleines" Major Release
Breaking Changes aus Nutzer-Sicht

---

# Was hat sich _genau_ geändert?

<div class="mt-12 min-h-1"></div>

* Es gibt 33 Einträge im Migration Guide
* davon sind 3 aber neue Funktionen (Fragments, Suspense)
* Die meisten "Breaking Changes" sind "one-liner" Fixes.


<div class="mt-8 min-h-1"></div>
<span v-click class="text-2xl">Was bedeutet das für Developer?</span>

<div v-click class="mt-4">

* Die Migration (fast) jedes Breaking Change ist *einfach*
* Aber die Migration _aller_ Changes ist *zeitaufwändig*

</div>

---

# Globale APIs

<div class="flex justify-between">
  <div class="flex-grow mr-2">

```js{all|1|6-8|10|1,6-10}
import Vue from 'vue'
import Dialog from './Dialog.vue'
import ClickOutside from '.clickOutside.js'
import PortalVue from 'portal-vue'

Vue.component('Dialog', Dialog)
Vue.directive('clickOutside', ClickOutside)
Vue.use(PortalVue)

new Vue(App).$mount('#app')
```

  </div>
  <div class="flex-grow">

```js{all|1|6,11|7-10|7-11}
import { createApp } from 'vue'
import Dialog from './Dialog.vue'
import ClickOutside from '.clickOutside.js'
import PortalVue from 'portal-vue'

const app = createApp(App)
app.component('Dialog', Dialog)
app.directive('clickOutside', ClickOutside)
app.use(PortalVue)

app.mount('#app')
```

  </div>
</div>

<hr class="mt-4 mb-8">

* Einmalige Änderungen
* Verbesserung: Mehrere Apps auf einer Seite sind besser isoliert.

---

# Lifecycle Hooks

<div class="flex justify-between">
  <div class="flex-grow mr-2">

```html{all|9}
<template>
  <h1>{{ message }}</h1>
</template>
<script>
export default {
  data: () => ({
    message
  }),
  beforeDestroy() {
    console.log('Destruction imminent!')
  }
}
</script>
```

  </div>
  <div class="flex-grow">

```html{all|9}
<template>
  <h1>{{ message }}</h1>
</template>
<script>
export default {
  data: () => ({
    message
  }),
  beforeUnmount() {
    console.log('Destruction imminent!')
  }
}
</script>
```

  </div>
</div>

---
layout: section
---

# `@vue/compat`
## Migration mit der Compat Build (Vue 3.1)

---
layout: big-bullets
heading: Warum eine Migration Build?
---

* Migration großer Projekte nicht "an einem Wochenende"
* Dependencies sind noch nicht alle Vue 3 kompatibel
* Deprecation Warnings zeigen notwendige Änderungen auf.

---
layout: big-bullets
heading: Workflow - Initiale Upgrades
---

1. Upgrade der notwendigen Dependencies
2. Compat Mode aktivieren
3. App starten
4. Compiler Warnings fixen (z.B. wegen Filters)
5. Auf Vuex `4.0` upgraden
6. Auf VueRouter `3.0` upgraden

Eure App läuft jetzt auf Vue 3 - mit Vue 2 Component Syntax! <span class="text-2xl">🤯</span>

---
layout: big-bullets
heading: Workflows für die Migration
---

<div class="mb-12 text-3xl text-center">2 Varianten:</div>

1. Migration per Feature
2. Migration per Component

---
layout: default
---

# Migration - per Feature

<div class="flex mt-8">

<div v-click class="flex-grow w-1/2 pr-2">

* Ein Feature aussuchen - z.B. Lifecycle hooks
* in jeder Component migrieren

Von Vue 2:

```js{2}
export default {
  beforeDestroy() {
    this.doSomething()
  }
}
```

zu Vue 3:

```js{2}
export default {
  beforeUnmount() {
    this.doSomething()
  }
}
```

</div>
<div v-click class="flex-grow w-1/2 border-l border-vgreen pl-2">

* Anschließend das compat feature global deaktivieren

```js{8-10}
// main.js
import { 
createApp,
configureCompat 
} from 'vue'
import App from './App.vue'

configureCompat({
  OPTIONS_BEFORE_DESTROY: false,
})

createApp(App).mount('#app')
```

</div>

</div>

---

# Migration - per Component

* Alle Migrationen in einer Component vornehmen

<div class="flex mt-8">

<div v-click class="flex-grow w-1/2 pr-2">

```js{2,4,8,11}
export default {
  props: ['value']
  components: {
    Child: () => import('./Child.vue')
  },
  methods: {
    update(value) {
      this.$emit('input', value)
    },
  },
  beforeDestroy() {
    this.doSomething()
  }
}
```

</div>
<div v-click class="flex-grow w-1/2 border-l border-vgreen pl-2">

```js{2-5,7-9,13,16}
export default {
  compatConfig: {
    MODE: 3,
  },
  props: ['value']
  components: {
    Child: defineAsyncComponent(
      () => import('./Child.vue')
    )
  },
  methods: {
    update(value) {
      this.$emit('input', value)
    },
  },
  beforeDestroy() {
    this.doSomething()
  }
}
```

</div>

</div>


---
layout: big-bullets
heading: Empfehlungen
--- 

* Wir werden eine **MENGE** warnings sehen - keine Panik!
* Migriert zuerst "find&replace" features global in allen Components
* Migriert danach einzelne Components
* Migriert zuletzt eure dependencies auf ihre Vue 3 versionen

---
layout: section
---

# Und nun?
## Wohin die Reise geht

---

# Developer Experience
Vetur + Volar + VueDX

---

# Devtools
Plugin API

---

# RFCs

* Was geht ab?


---

# Dieser Talk wurde mit Slidev gebaut

* Vue 3
* Vite
*
