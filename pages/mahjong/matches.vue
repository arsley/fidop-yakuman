<template>
    <main>
        <h1>Mahjong matches page</h1>
        <a-table :data-source="matches" :columns="columns"></a-table>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'MahjongMatch',
    data: () => ({
        matches: [],
        columns: [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Held at',
                dataIndex: 'created_at',
                key: 'created_at',
            }
        ],
    }),
    async fetch() {
        this.matches = await this.$axios.$get('http://localhost:3000/mahjong_matches')
    },
})
</script>
