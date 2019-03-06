<template>
  <b-form @submit="onSubmit" class="text-white text-left mt-4">
    <b-row>
      <b-col md="12" lg="6">
        <div>
          <b-form-group id="title" label="Title:" label-for="title"
                        :invalid-feedback="errors.first('title')">
            <b-form-input
                v-validate="'required|alpha_spaces'"
                name="title"
                :class="{ error: errors.has('title') }"
                id="title"
                type="text"
                v-model="project.title"
                :state="validateState('title')"
            />
          </b-form-group>
          <b-row>
            <b-col md="4">
              <b-form-group id="city" label="City:" label-for="city"
                            :invalid-feedback="errors.first('city')">
                <b-form-input
                    v-validate="'required|alpha_spaces'"
                    name="city"
                    :class="{ error: errors.has('city') }"
                    id="city"
                    type="text"
                    v-model="project.city"
                    :state="validateState('city')"
                />
              </b-form-group>
              <b-form-group id="price" label="Price:" label-for="price" class="mt-3"
                            :invalid-feedback="errors.first('price')">
                <b-form-input
                    v-validate="'required|min_value:10'"
                    name="price"
                    :class="{ error: errors.has('price') }"
                    id="price"
                    type="number"
                    v-model.number="project.price"
                    :state="validateState('price')"

                />
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group id="street" label="Street:" label-for="street"
                            :invalid-feedback="errors.first('street')">
                <b-form-input
                    v-validate="'required|alpha_spaces'"
                    name="street"
                    :class="{ error: errors.has('street') }"
                    id="street"
                    type="text"
                    v-model="project.street"
                    :state="validateState('street')"
                />
              </b-form-group>
              <b-form-group id="distance" label="Distance:" label-for="distance"
                            :invalid-feedback="errors.first('distance')">
                <b-form-input
                    v-validate="'required|min_value:1'"
                    name="distance"
                    :class="{ error: errors.has('distance') }"
                    id="distance"
                    type="number"
                    v-model.number="project.distance"
                    :state="validateState('distance')"
                />
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group id="house" label="House:" label-for="house"
                            :invalid-feedback="errors.first('house')">
                <b-form-input
                    v-validate="'required|min_value:1'"
                    name="house"
                    :class="{ error: errors.has('house') }"
                    id="house"
                    type="number"
                    v-model="project.house"
                    :state="validateState('house')"

                />
              </b-form-group>
              <b-form-group id="floors" label="Floors:" label-for="floors"
                            :invalid-feedback="errors.first('floors')">
                <b-form-input
                    v-validate="'required|between:1,10'"
                    name="floors"
                    :class="{ error: errors.has('floors') }"
                    id="exampleInput8"
                    type="number"
                    v-model.number="project.floors"
                    :state="validateState('floors')"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="12" lg="6">
        <b-form-group @submit="onSubmit" @delete="onDelete(flat, index)"
                      class="text-white text-left"
                      v-for="(flat, index) in project.flats">
          <b-row>
            <p class="text-white text-center ml-3"><strong>{{flat.rooms}}-room flat</strong>
              <b-button variant="outline-danger" @click="onDelete(flat, index)" style="border: none;">
                <i class="far fa-trash-alt"></i>
              </b-button>
            </p>
            <b-col>
              <div>
                <b-form-group id="rooms" label="Rooms:" label-for="rooms"
                              :invalid-feedback="errors.first('rooms')">
                  <b-form-input v-validate="'required|between:1,6'"
                                name="rooms"
                                :class="{ error: errors.has('rooms') }"
                                id="rooms"
                                type="number"
                                v-model.number="flat.rooms"
                                :state="validateState('rooms')"
                  />
                </b-form-group>
              </div>
            </b-col>
            <b-col>
              <div>
                <b-form-group id="area" label="Area:" label-for="area"
                              :invalid-feedback="errors.first('area')">
                  <b-form-input v-validate="'required|between:15,200'"
                                name="area"
                                :class="{ error: errors.has('area') }"
                                id="area"
                                type="number"
                                v-model.number="flat.area"
                                :state="validateState('area')"
                  />
                </b-form-group>
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
</template>

<script>
    import axios from "axios"
    export default {
        name: "EditAddForm",
        data() {
            return {
                file: null,
                project: null,
            }
        },
        methods: {
            async onSubmit(evt) {
                evt.preventDefault();
                this.$validator.validateAll()
                if (!this.errors.any()) {
                    await axios.put('http://localhost:3000/projects/' + this.$route.params.id, this.project);
                    window.open('http://localhost:8080/projects/' + this.$route.params.id);
                }
                // else if (!this.errors.any()) {
                //     await axios.post('http://localhost:3000/projects', this.project);
                //     window.open('http://localhost:8080/projects');
                // }
            }
            ,
            onDelete(flat, index) {
                if (this.project.flats[index] === flat) {
                    this.project.flats.splice(index, 1)
                } else {
                    let found = this.project.flats.indexOf(flat)
                    this.project.flats.splice(found, 1)
                }
            },
            validateState(ref) {
                if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
                    return !this.errors.has(ref)
                }
                return null
            }

        }
        ,
        async created() {
            // if () {
            const response = await
                axios.get('http://localhost:3000/projects/' + this.$route.params.id);
            this.project = response.data;
            // }
        }
    }
</script>
