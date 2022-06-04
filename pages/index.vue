<template>
    <main>
        <h1>Yakuman</h1>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/members">Members</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/mahjong/matches">Mahjong matches</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/mahjong/games">Mahjong games</NuxtLink>
        </p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',
})
</script>
