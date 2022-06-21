<template>
    <main>
        <h1>Mahjong jansous page</h1>
        <a-spin size="large" tip="loading..." :spinning="loading">
            <a-table
                :data-source="jansous"
                :columns="columns"
            ></a-table>
        </a-spin>
        <p>
            <a href="/">Home</a>
        </p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { MahjongJansou } from '~/types/IMahjongJansou'

export default Vue.extend({
    name: 'MahjongMatch',
    data: () => ({
        jansous: [] as MahjongJansou[],
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'GoogleMap',
                dataIndex: 'google_map_url',
                key: 'google_map_url',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ],
        loading: true,
    }),
    async fetch() {
        try {
            this.jansous = await this.$axios.$get('/mahjong_jansous')
        } catch (_err: any) {
            return
        }

        this.loading = false
    },
})
</script>
