<template>
    <main>
        <h1>Mahjong games page</h1>
        <a-table v-if="loading" :dataSource="[]" :columns="[]"></a-table>
        <a-table v-else :dataSource="tableFormattedGames" :columns="columns">
            <span slot="scoreSlot" slot-scope="score, record">
                <span v-if="!record.sanma && String(score) != '-' && score >= 30000">
                    <a-badge status="success" :text="String(score)" />
                </span>
                <span v-else-if="!record.sanma && String(score) != '-' && score < 30000">
                    <a-badge status="error" :text="String(score)" />
                </span>
                <span v-else-if="record.sanma && String(score) != '-' && score >= 40000">
                    <a-badge status="success" :text="String(score)" />
                </span>
                <span v-else-if="record.sanma && String(score) != '-' && score < 40000">
                    <a-badge status="error" :text="String(score)" />
                </span>
                <span v-else>-</span>
            </span>
        </a-table>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
    </main>
</template>

<script lang="ts">
interface MahjongGame {
    id: number
    east_id:  string
    south_id: string
    west_id:  string
    north_id: string | null
    east_score:  number
    south_score: number
    west_score:  number
    north_score: number | null
    mahjong_match_id: number
}

interface Member {
    id: string
    name: string
    discord_id: string
}

interface ColumnObject {
    title: string
    dataIndex: string
    key: string,
    scopedSlots?: { customRender: string }
}

interface UuidWithScore  {
    [key: string]: number | string
}

type TableFormattedGame = UuidWithScore & {
    id: number
    sanma: boolean
}

import Vue from 'vue'

export default Vue.extend({
    data: () => ({
        games: [] as MahjongGame[],
        members: [] as Member[],
        tableFormattedGames: [] as UuidWithScore[],
        columns: [] as ColumnObject[],
        loading: true,
    }),
    async fetch() {
        this.games   = await this.$axios.$get('http://localhost:3000/mahjong_games')
        this.members = await this.$axios.$get('http://localhost:3000/members')
        this.assignTableFormattedGames()
        this.assignColumns()
        this.loading = false
    },
    methods: {
        assignTableFormattedGames() {
            let uuidWithScoresBase = {} as TableFormattedGame
            this.members.forEach(member => {
                uuidWithScoresBase[member.id] = '-'
            })

            let tableFormattedGames = [] as TableFormattedGame[]
            this.games.forEach(game => {
                let uuidWithScores = {} as TableFormattedGame
                if (game.north_id !== null && game.north_score !== null) {
                    uuidWithScores = Object.assign({}, uuidWithScoresBase, {
                        id: game.id,
                        sanma: false,
                        [game.east_id]:  game.east_score,
                        [game.south_id]: game.south_score,
                        [game.west_id]:  game.west_score,
                        [game.north_id]: game.north_score,
                    })
                } else {
                    uuidWithScores = Object.assign({}, uuidWithScoresBase, {
                        id: game.id,
                        sanma: true,
                        [game.east_id]:  game.east_score,
                        [game.south_id]: game.south_score,
                        [game.west_id]:  game.west_score,
                    })
                }
                tableFormattedGames.push(uuidWithScores)
            })
            this.tableFormattedGames = tableFormattedGames
        },
        assignColumns() {
            let columns = [] as ColumnObject[]
            columns.push({
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            })
            this.members.forEach(member => {
                columns.push({
                    title: member.name,
                    dataIndex: member.id,
                    key: member.id,
                    scopedSlots: { customRender: 'scoreSlot' },
                })
            })
            this.columns = columns
        }
    }
})
</script>
