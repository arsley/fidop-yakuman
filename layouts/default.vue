<template>
    <a-layout>
        <a-layout-sider
            theme="dark"
            :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
        >
            <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
                <a-menu-item key="1">
                    <NuxtLink to="/members">
                        <a-icon type="user" />
                        <span>雀士一覧</span>
                    </NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                    <NuxtLink to="/mahjong/matches">
                        <a-icon type="video-camera" />
                        <span>戦一覧</span>
                    </NuxtLink>
                </a-menu-item>
                <a-menu-item key="3">
                    <NuxtLink to="/mahjong/games">
                        <a-icon type="upload" />
                        <span>戦績一覧</span>
                    </NuxtLink>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '14em', height: '100vh' }">
            <a-layout-content
                :style="{ overflow: 'auto', margin: '3em 2em', padding: '3em', background: '#fefefe' }"
            >
                <Nuxt />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
