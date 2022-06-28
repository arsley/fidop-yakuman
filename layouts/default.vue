<template>
    <a-layout>
        <a-layout-sider theme="dark" :style="{ height: '100vh' }" v-model="collapsed" :trigger="null" collapsible>
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
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                    :style="{ padding: '0 3em' }"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                />
            </a-layout-header>
            <a-layout-content
                :style="{ margin: '3em 2em', padding: '3em', background: '#fff' }"
            >
            <Nuxt />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
