<template>
  <div>
    <h1 class="text-white"> hbgrhbghrbghrbg</h1>
    <edit-add-form></edit-add-form>
  </div>
</template>

<script>
  import axios from "axios"
  import EditAddForm from "./components/EditAddForm.vue";

  export default {
    name: 'projects',
    components: {EditAddForm},
    data() {
      return {
        file: null,
        project: {},
        flat: {},
        flats: []
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault();
        await this.$validator.validateAll()
        if (!this.errors.any()) {
          await axios.post('http://localhost:3000/projects/', this.project);
          window.open('http://localhost:8080/projects');
        }
      }
      ,
      // onDelete(flat, index) {
      //     if (this.project.flats[index] === flat) {
      //         this.project.flats.splice(index, 1)
      //     } else {
      //         let found = this.project.flats.indexOf(flat)
      //         this.project.flats.splice(found, 1)
      //     }
      // },
      validateState(ref) {
        if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
          return !this.errors.has(ref)
        }
        return null
      }

    }

    // async created() {
    //     const response = await
    //         axios.get('http://localhost:3000/projects/' + this.$route.params.id);
    //     this.project = response.data;
    // }
  }

</script>

