<script setup lang="ts">
import { Menu } from '@ark-ui/vue/menu'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <button @click="isOpen = !isOpen">Trigger from the outside</button>
  <Menu.Root v-model:open="isOpen">
    <Menu.Trigger>Open menu</Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="react">React</Menu.Item>
        <Menu.Item value="solid">Solid</Menu.Item>
        <Menu.Item value="vue">Vue</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</template>
