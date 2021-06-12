---
# try also 'default' to start simple
theme: default
colorSchema: light
# random image from a curated Unsplash collection by Anthony
background: 'https://source.unsplash.com/collection/94734566/1920x1080'
highlighter: shiki
# apply any windi css classes to the current slide
# class: 'text-center'
layout: cover
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
layout: quote
---

# Semver
 
<!-- <div class="mt-12 min-h-1"></div> -->

Given a version number MAJOR.MINOR.PATCH, increment the

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards compatible manner, and
* PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

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

# Wo steht das Ökosystem?
Offizielle Libraries

<div class="mt-4 min-h-1"></div>

* 18.09.2020 - Vue 3.0 **stable**
* xx.xx.2020 - Vue CLI (Vue 3 Support) **stable**
* xx.xx.2020 - Vuex 4.0 **stable** 
* xx.xx.2021 - Vue Router 3.0 **stable**
* xx.xx.2021 - vue-loader 16.0 **stable**
* 

**Beta**

* vue-devtools 6.0.0-beta.11
* rollup-plugin-vue: 6.0.0-beta.11

**Release Candidate**
* vue-test-utils

---
# Wer macht was?

TODO: show team and responsibilities

---

# Community Ökosystem

<div class="mt-12 min-h-1"></div>

* Vuetify
* Quasar
* Nuxt

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

# Neuer Compiler
Bessere Performance



---

# Vue 3 aus Nutzer-Sicht

Änderungen sind überschaubar

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
