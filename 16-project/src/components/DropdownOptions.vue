<template>
  <b-dropdown id="ddown1" :text="$t('changeLanguage')" class="m-md-2">
    <b-dropdown-item class="ml-auto" v-for="option in options" @click="$emit('input', option[optionValue])">
        {{option[optionKey]}}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
    export default {
        name: "DropdownOptions",
        props: {
            options: {required: true, type: Array},
            optionKey: {required: true, type: String},
            optionValue: {required: true, type: String}
        }
    }
</script>
