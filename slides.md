---
# try also 'default' to start simple
theme: default 
# random image from a curated Unsplash collection by Anthony
background: 'https://source.unsplash.com/collection/94734566/1920x1080'
highlighter: shiki
# apply any windi css classes to the current slide
class: 'text-center'
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.
  
  Learn more at [Sli.dev](https://sli.dev)
---

# Vue 3 > Vue 2 + 1

Mehr als ein Major Release

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

<div class="text-center">
  <h2 class="text-2xl">
  Vue 3.0.0 wurde am XX.10.2020 veröffentlicht 
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
    <p v-click class="mt-4">noch nicht ganz</p>
  </div>
</div>


---

# Vue 3 ist ein kleiner und großer Schritt zugleich

_

<div v-click class="mt-8">
klein, denn:

* Änderungen (breaking changes) sind zwar recht zahlreich...
* ..aber: Umfang und Komplexität überschaubar
* Wer eine Vue 2 App schreiben kann, kann mit Vue 3 direkt loslegen
</div>

<div v-click class="mt-8">
groß, denn:

* Vue 3 wurde von grund auf neu geschrieben
* Interne APIs sind nicht mehr deckungsgleich
* Compiler und VirtualDOM Implementierung sind grundverschieden
* ermöglicht erhebliche Performancezugewinne
</div>

---

# Vue 3 aus Nutzer-Sicht

Änderungen sind überschaubar

<div class="flex justify-between">
  <div class="flex-grow mr-2">

```html{all|9}
<template>
  <h1>{\{ message }}</h1>
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
  <h1>{\{ message }}</h1>
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