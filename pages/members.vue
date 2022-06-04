<template>
    <main>
        <h1>Members page</h1>
        <a-table :dataSource="members" :columns="columns"></a-table>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
    </main>
</template>

<script lang="ts">
interface Member {
    id: string
    name: string
    discord_id: string
}

import Vue from 'vue'

export default Vue.extend({
    data: () => ({
        members: [] as Member[],
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
                title: 'Discord ID',
                dataIndex: 'discord_id',
                key: 'discord_id',
            }
        ],
    }),
    async fetch() {
        this.members = await this.$axios.$get('http://localhost:3000/members')
    },
})
</script>
