<template>
    <div class="k-shake" :class="{ ['k-shakeactive']: props.modelValue }">
        <slot />
    </div>
</template>
<script lang='ts' setup>
import { watch } from 'vue'
import "./style/index.less"
defineOptions({
    name: 'k-shake'
})
type ShakeProps = {
    modelValue?: boolean
}
type Emits = {
    (e: 'update:modelValue', value: boolean): void
}
const props = withDefaults(defineProps<ShakeProps>(), {
    modelValue: false
})

const emits = defineEmits<Emits>()


watch(() => props.modelValue, (newVal) => {
    if (newVal) {
        setTimeout(() => {
            emits("update:modelValue", false)
        }, 1000);
    }

}, { immediate: true })


</script>
