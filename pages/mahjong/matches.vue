<template>
    <main>
        <h1>Mahjong matches page</h1>
        <a-spin size="large" tip="loading..." :spinning="loading">
            <a-table
                :data-source="matchesWithJansou"
                :columns="columns"
            ></a-table>
        </a-spin>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'

interface MahjongMatch {
    id: number
    name: string
    created_at: Date
    mahjong_jansou_id: string
}

interface MahjongJansou {
    id: string
    name: string
    google_map_url: string
    address: string
    note: string
}

type MatchWithJansou = MahjongMatch & {
    jansouName: string
}

export default Vue.extend({
    name: 'MahjongMatch',
    data: () => ({
        matches: [] as MahjongMatch[],
        jansous: [] as MahjongJansou[],
        matchesWithJansou: [] as MatchWithJansou[],
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
                title: 'Jansou',
                dataIndex: 'jansouName',
                key: 'jansouName',
            },
            {
                title: 'Held at',
                dataIndex: 'created_at',
                key: 'created_at',
            },
        ],
        loading: true,
    }),
    async fetch() {
        try {
            this.matches = await this.$axios.$get('/mahjong_matches')
            this.jansous = await this.$axios.$get('/mahjong_jansous')
        } catch (_err: any) {
            return
        }

        this.assignMatchesWithJansou()
        this.loading = false
    },
    methods: {
        assignMatchesWithJansou() {
            const matchesWithJansou = [] as MatchWithJansou[]
            this.matches.forEach((match) => {
                const jansou = this.jansous.find(
                    (jansou) => jansou.id === match.mahjong_jansou_id
                )
                const jansouName =
                    jansou !== undefined ? jansou.name : 'Undefined'
                matchesWithJansou.push(Object.assign({}, match, { jansouName }))
            })
            this.matchesWithJansou = matchesWithJansou
        },
    },
})
</script>
