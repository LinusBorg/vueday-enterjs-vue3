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

<div class="text-center">
  <h2 class="text-2xl">
  Vue 3.0.0 wurde am 18.09.2020 veröffentlicht 
  </h2>
  <div class="mt-24">
    <p v-click>
      Also ist alles fertig, richtig?
    </p>
    <div v-after class="mt-4">
      <video autoplay loop muted="true" width="200"  class="mx-auto">    
          <source 
            src="https://media.giphy.com/media/b2dCcePmq65w8rs4z0/source.mp4"
            type="video/mp4" 
          />    
      </video> 
    </div>
    <p v-click class="mt-4">noch nicht ganz!</p>
  </div>
</div>

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

# Vue 3 ist ein kleines und großes Major Release
 

<div v-click class="mt-12">
groß, denn:

* neu geschrieben - in Typescript
* Compiler und VirtualDOM Implementierung neu und grundverschieden
* ermöglicht erhebliche Performancezugewinne
* Ökosystem muss nachziehen um kompatibel zu sein.
</div>

<div v-click class="mt-8">
klein, denn:

* Änderungen (breaking changes) sind zwar recht zahlreich...
* ..aber: Umfang und Komplexität überschaubar
* Wer eine Vue 2 App schreiben kann, kann mit Vue 3 direkt loslegen
* "Compat Build" vereinfacht die schrittweise Migration von Apps
</div>


---
layout: section

---

# Ein großes Major Release
## Was bedeutet das genau?

---

# Wo steht das Framework als ganzes?
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

  **Beta**

  * vue-devtools 6.0.0-beta.11
  * rollup-plugin-vue: 6.0.0-beta.11
  </div>

  <div v-click class="flex-grow">

  **Release Candidate**
  * @vue/test-utils - 2.0.0-rc.6
  
  </div>
</div>

<hr v-click class="border-t-2 border-vgreen w-xl mt-8">
<div v-after class="mt-4">

* Offizielles Ökosystem fast vollständig stable
* Q1/Q2 2021 wichtige Stablisierungsphase
* Vue 3 bekam 11 Patch releases und erstes Minor Release 3.1 (07.06.2021)

</div>

---

# Wer macht was?

TODO: show team and responsibilities

---

# Community Ökosystem

<div class="mt-12 min-h-1"></div>

<div class="flex">
  <div class="flex-grow">
  
  **Frameworks**
<!-- 
  * Ant Design Vue - <Badge type="success">stable</Badge>
  * Element-Plus - <Badge type="success">stable</Badge>
  * Quasar - <Badge type="warn">Beta</Badge>
  * Vuetify - <Badge type="warn">Alpha</Badge>
  * Nuxt - <Badge type="info">First beta announced</Badge>
  * ChakraUI/Vue <Badge>under development</Badge> -->

  </div>

  <div class="flex-grow">
  
  **Libraries**

  * xx
  
  </div>

  <div class="flex-grow">

  **Integrationen**

  * Storybook `v6.3`
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
layout: section
---

# Wozu dieser Aufwand?

---

# Alles auf Typescript - warum?

<div class="mt-12 min-h-1"></div>

* Typescript ist mittlerweile allgegenwärtig
* Bisher wurden Types manuell gepflegt

**Vue 3**

* komplett in TS geschrieben
* klare Abgrenzung der Module in einem Monorepo

**Ergebnis**

* Sourcecode ist klarer strukturiert, Types erleichtern Verständnis
* Ziel: Einstiegshürde für neue Contributors senken
* Nebeneffekt: Bessere, automatisch generierte Types für die Enduser

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

# Neuer Compiler & VirtualDOM

  <div class="mt-8 min-h-1 text-2xl font-bold">
  Compiler
  </div>

  <div class="mt-4">

  * Blocks - flache Arrays mit dynamischen Elementen
  * Hoisting von statischen Elementen
  * Compiler Flags für dynamische Elemente

</div>

<div v-click class="mt-8 min-h-1 text-2xl font-bold">
Virtal DOM
</div>

<div v-after class="mt-4">

* VNodes sind nun flache Objekte
  * geringerer Memory Footprint
  * schnelleres Diffing
* Component slots sind functions

</div>

---

# Beispiel

<!-- <div class="font-sm">
  <iframe src="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8aDE+V2VsY29tZSE8L2gxPlxuICA8ZGl2IGNsYXNzPVwic3RhdGljXCI+XG4gICAgPE15Q29tcG9uZW50XG4gICAgICBwcm9wMT1cInN0YXRpY1wiXG4gICAgICA6c3VidGl0bGU9XCJzdWJ0aXRsZVwiXG4gICAgPlxuICAgICAgPHNwYW4+IHt7IG1zZyB9fTwvc3Bhbj5cbiAgICA8L015Q29tcG9uZW50PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJy4vTXlDb21wb25lbnQudnVlJ1xuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIE15Q29tcG9uZW50LFxuICAgIH0sXG4gICAgc2V0dXAoKSB7XG5cdFx0XHRjb25zdCBtc2cgPSAnSGVsbG8gV29ybGQhJ1xuXHRcdFx0Y29uc3Qgc3VidGl0bGUgPSByZWYoJ1RoaXMgaXMgdGhlIHN1YnRpdGxlJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1zZywgc3VidGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsIk15Q29tcG9uZW50LnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPHNsb3QgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydwcm9wMScsICdzdWJ0aXRsZSddXG59XG48L3NjcmlwdD4ifQ=="
    width="900"
    height="400"
></iframe>
</div> -->

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
layout: section
---

# Und nun?
## Wohin die Reise geht

---

# Dieser Talk wurde mit Slidev gebaut

* Vue 3
* Vite
*
