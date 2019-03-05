<template>
  <div>
    <ValidationProvider rules="required">
      <div slot-scope="{ errors }">
        <input v-model="value" type="text">
        <span id="error">{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
    import { ValidationProvider } from 'vee-validate';

    export default {
        name: "ValidationProvider",
        components: {
            ValidationProvider
        }
    };
</script>
