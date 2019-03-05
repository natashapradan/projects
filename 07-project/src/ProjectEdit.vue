<template>
  <div>
    <b-form @submit="onSubmit" class="text-white text-left mt-4">
      <b-row v-if="project">
        <b-col md="12" lg="6">
          <div>
            <b-form-group id="exampleInputGroup2" label="Title:" label-for="exampleInput2">
              <b-form-input
                  id="exampleInput2"
                  type="text"
                  v-model="project.title"
                  placeholder="Enter project's new title"/>
            </b-form-group>

            <b-form-group id="exampleInputGroup3" label="Address:" label-for="exampleInput3">
              <b-form-input
                  id="exampleInput3"
                  type="text"
                  v-model="project.address"
                  placeholder="Enter project's new address"/>
            </b-form-group>

            <b-form-group id="exampleInputGroup4" label="Price:" label-for="exampleInput4" class="mt-3">
              <b-form-input
                  id="exampleInput4"
                  type="text"
                  v-model.number="project.price"
                  placeholder="Enter project's new price per square meter"/>
            </b-form-group>

            <b-form-group id="exampleInputGroup5" label="Distance:" label-for="exampleInput5">
              <b-form-input
                  id="exampleInput5"
                  type="text"
                  v-model.number="project.distance"
                  placeholder="Enter project's new distance"/>
            </b-form-group>

            <b-form-group id="exampleInputGroup6" label="Floors:" label-for="exampleInput6">
              <b-form-input
                  id="exampleInput6"
                  type="text"
                  v-model.number="project.floors"
                  placeholder="Enter project's new number of floors"/>
            </b-form-group>
          </div>
        </b-col>
        <b-col md="12" lg="6">
          <b-form-group @submit="onSubmit" @delete="onDelete(flat, index)"
                        class="text-white text-left"
                        v-for="(flat, index) in project.flats">
            <b-row>
              <p class="text-white text-center ml-3"><strong>{{flat.rooms}}-room flat</strong>
                <b-button variant="outline-danger" @click="onDelete(flat, index)" style="border: none;"><i
                    class="far fa-trash-alt"></i>
                </b-button>
              </p>
              <b-col>
                <div>
                  Rooms:
                  <b-input-group>
                    <b-form-input v-model.number="flat.rooms" type="text"/>
                  </b-input-group>
                </div>
              </b-col>
              <b-col>
                <div>
                  Area:
                  <b-input-group>
                    <b-form-input v-model.number="flat.area" type="text"/>
                  </b-input-group>
                </div>

                <div class="custom-checkbox mt-4">
                  <input type="checkbox" :id="'avail'+index" v-model="flat.avail">
                  <label :for="'avail'+index">Available</label>
                </div>
              </b-col>
            </b-row>


          </b-form-group>

          <div class="text-right mb-2">
            <b-button type="submit" variant="success">Submit</b-button>
          </div>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'projects',
        data() {
            return {
                file: null,
                project: null,
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert("Success");
                axios.put('http://localhost:3000/projects/' + this.$route.params.id, this.project);
                window.open('http://localhost:8080/projects/'  + this.$route.params.id);

            },
            onDelete(flat, index) {
                if (this.project.flats[index] === flat) {
                    this.project.flats.splice(index, 1)
                } else {
                    let found = this.project.flats.indexOf(flat)
                    this.project.flats.splice(found, 1)
                }
            }
        }
        ,
        async created() {
            const response = await
                axios.get('http://localhost:3000/projects/' + this.$route.params.id);
            this.project = response.data;
        }
    }

</script>

