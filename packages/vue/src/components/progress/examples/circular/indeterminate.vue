<script setup lang="ts">
import { Progress } from '@ark-ui/vue/progress'
</script>

<template>
  <Progress.Root :defaultValue="null">
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
</template>
