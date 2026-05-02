<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const drawer = ref(false)

const links = [
  { label: 'Про мене', hash: '#about' },
  { label: 'Як працюю', hash: '#how' },
  { label: 'Кейси', hash: '#cases' },
  { label: 'Відгуки', hash: '#reviews' },
  { label: 'Блог', hash: '#blog' },
  { label: 'Контакти', hash: '#contacts' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4 lg:px-8">
      <RouterLink to="/" class="group flex items-center gap-2" @click="drawer = false">
        <span class="font-serif text-xl tracking-tight text-brand md:text-2xl">María</span>
        <span class="hidden rounded-full bg-surface px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand/80 sm:inline"
          >SMM</span
        >
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="item in links"
          :key="item.hash"
          :to="{ path: '/', hash: item.hash }"
          class="rounded-full px-3 py-2 text-sm font-medium text-brand/70 transition hover:bg-surface hover:text-brand"
          :class="{ 'bg-surface text-brand': route.path === '/' && route.hash === item.hash }"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink
          to="/cases"
          class="ml-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
        >
          Детальніше про кейси
        </RouterLink>
      </nav>

      <div class="flex items-center lg:hidden">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-brand/10 bg-white text-brand shadow-sm"
          aria-label="Меню"
          @click="drawer = true"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <el-drawer
      v-model="drawer"
      direction="rtl"
      size="min(100%, 320px)"
      :with-header="false"
      append-to-body
      class="mobile-nav-drawer"
    >
      <div
        class="flex h-full min-h-0 flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))]"
      >
        <div class="mb-6 flex shrink-0 items-center justify-between gap-3">
          <span class="text-lg font-semibold leading-normal text-brand">Навігація</span>
          <button
            type="button"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/15 bg-surface text-brand transition hover:bg-brand/5"
            aria-label="Закрити меню"
            @click="drawer = false"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
          <RouterLink
            v-for="item in links"
            :key="item.hash"
            :to="{ path: '/', hash: item.hash }"
            class="rounded-xl px-3 py-3 text-base font-medium leading-snug text-brand hover:bg-surface"
            @click="drawer = false"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </el-drawer>
  </header>
</template>

<style scoped>
/* Прибираємо дефолтні відступи Element Plus, щоб самі керувати safe-area й не обрізати текст */
.mobile-nav-drawer :deep(.el-drawer__body) {
  padding: 0;
  overflow-x: hidden;
}
</style>
