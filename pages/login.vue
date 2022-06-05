<template>
    <main>
        <h1>Login</h1>
        <a-form-model layout="inline" :model="administrator" @submit="handleLogin" @submit.native.prevent>
            <a-form-model-item>
                <a-input v-model="administrator.userid" placeholder="Userid">
                    <a-icon slot="prefix" type="user" style="color: rgb(0 0 0 / 25%)" />
                </a-input>
            </a-form-model-item>

            <a-form-model-item>
                <a-input v-model="administrator.password" type="password" placeholder="Password">
                    <a-icon slot="prefix" type="lock" style="color: rgb(0 0 0 / 25%)" />
                </a-input>
            </a-form-model-item>

            <a-form-model-item>
                <a-button type="primary" html-type="submit" :disabled="administrator.userid == '' || administrator.password == ''">
                    Log in
                </a-button>
            </a-form-model-item>
        </a-form-model>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'LoginYakuman',
    data: () => ({
        administrator: {
            userid: '',
            password: '',
        },
    }),
    methods: {
        async handleLogin(e) {
            e.preventDefault()
            const res =
                await this.$axios.$post('http://localhost:3000/administrator_sessions/create', {
                    administrator: { ...this.administrator },
                    withCredentials: true,
                })
                .catch(err => {
                    console.log(res)
                })
        },
    },
})
</script>
