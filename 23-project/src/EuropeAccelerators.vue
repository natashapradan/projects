<template>
  <div v-if="europeanCountry" class="d-flex flex-row flex-wrap">
    <b-card
        v-for="opportunity in europeanCountry.opportunities"
        :title="opportunity.name"
        :img-src="opportunity.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid #2C3E50; text-transform: capitalize"
        class="m-5"
    >
      <p><em>{{ opportunity.description }}</em></p>
      <b-row>
        <b-col>
          Funds: <h4>{{ opportunity.funds }}</h4> to each participant
        </b-col>
        <b-col>
          Terms: <h4>{{ opportunity.terms }}</h4> ownership upon success
        </b-col>
      </b-row>
      <hr/>
      <b-row class="mt-2">
        <b-col>
          Relocation to: <strong>{{ opportunity.relocation }}</strong>
        </b-col>
        <b-col>
          Duration: <strong>{{ opportunity.duration }}</strong>
        </b-col>
      </b-row>
      <hr/>
      MVP: <strong>{{ opportunity.mvp }}</strong>
      <hr/>
      Deadline: <h4 class="style: text-danger">{{ opportunity.deadline }}</h4>

      <b-button :href="opportunity.apply" target='_blank' class="btn btn-success btn-block mt-2">
        <strong>Apply</strong>
      </b-button>
    </b-card>
  </div>

</template>

<script>
  import axios from "axios"


  export default {
    name: 'products',
    data() {
      return {
        title: 'products',
        europeanCountry: {opportunities: []},
      }
    },
    async created() {

      const response = await axios.get('http://localhost:3000/europeanCountries/' + this.$route.params.id)
      this.europeanCountry = response.data;
    }
  }
  //
</script>


