<template>
    <a-layout>
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <a-menu
                theme="dark"
                mode="horizontal"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1">
                    <NuxtLink to="/members">雀士一覧</NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                    <NuxtLink to="/mahjong/matches">戦一覧</NuxtLink>
                </a-menu-item>
                <a-menu-item key="3">
                    <NuxtLink to="/mahjong/games">局一覧</NuxtLink>
                </a-menu-item>
                <a-menu-item key="4">
                    <NuxtLink to="/mahjong/jansous">雀荘一覧</NuxtLink>
                </a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <a-breadcrumb :style="{ margin: '16px 0' }">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <div :style="{ background: '#fefefe', padding: '24px', minHeight: '380px' }">
                <Nuxt />
            </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
            fidop-yakuman ©2022
        </a-layout-footer>
    </a-layout>
</template>
