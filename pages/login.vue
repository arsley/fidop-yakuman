<template>
    <main>
        <h1>Login</h1>
        <a-form-model
            layout="inline"
            :model="auth"
            @submit.prevent="handleLogin"
        >
            <a-form-model-item>
                <a-input v-model="auth.userid" placeholder="Userid">
                    <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgb(0 0 0 / 25%)"
                    />
                </a-input>
            </a-form-model-item>

            <a-form-model-item>
                <a-input
                    v-model="auth.password"
                    type="password"
                    placeholder="Password"
                >
                    <a-icon
                        slot="prefix"
                        type="lock"
                        style="color: rgb(0 0 0 / 25%)"
                    />
                </a-input>
            </a-form-model-item>

            <a-form-model-item>
                <a-button
                    type="primary"
                    html-type="submit"
                    :disabled=" auth.userid == '' || auth.password == ''">
                    Log in
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { notification } from 'ant-design-vue'
export default Vue.extend({
    auth: false,
    name: 'LoginYakuman',
    data: () => ({
        auth: {
            userid: '',
            password: '',
        },
    }),
    methods: {
        async handleLogin() {
            try {
                let response = await this.$auth.loginWith('local', { data: { auth: { ...this.auth }}})
            } catch (err: any) {
                if (err.response.status === 404) {
                    notification.error({
                        message: 'Login failed',
                        description: 'userid もしくは password が違います。',
                    })
                } else {
                    notification.error({
                        message: 'Unhandled error',
                        description: `ステータスコード${err.response.status}が返されました。詳細はコンソールを確認してください。`,
                    })
                }
                return
            }

            notification.success({
                message: 'Login success',
                description: 'Yakuman へようこそ。',
            })
        },
    },
})
</script>
