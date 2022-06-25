<template>
    <main>
        <h1>Members page</h1>
        <a-spin size="large" tip="loading..." :spinning="loading">
            <a-table :data-source="members" :columns="columns"></a-table>
        </a-spin>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Member } from '~/types/IMember'

export default Vue.extend({
    name: 'FidopMember',
    data: () => ({
        loading: true,
        members: [] as Member[],
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Discord ID',
                dataIndex: 'discord_id',
                key: 'discord_id',
            },
        ],
    }),
    async fetch() {
        try {
            this.members = await this.$axios.$get('/members')
        } catch (_err: any) {
            return
        }
        this.loading = false
    },
})
</script>
