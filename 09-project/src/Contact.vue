<template>
  <div v-if="request">
    <b-form @submit="onSubmit" class="text-white text-left mt-4">
      <b-row>
        <b-col md="6" lg="8">
          <div class="text-center">
            <h3>Contact Form</h3>
            <h5>Leave us your data and we will contact you</h5>
          </div>
          <b-row>
            <b-col>
              <b-form-group id="firstName" label="First Name:" label-for="firstName"
                            :invalid-feedback="errors.first('firstName')">
                <b-form-input
                    v-validate="'required|alpha_spaces'"
                    name="firstName"
                    :class="{ error: errors.has('firstName') }"
                    id="firstName"
                    type="text"
                    v-model="request.firstName"
                    :state="validateState('firstName')"
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="lastName" label="Last Name:" label-for="lastName"
                            :invalid-feedback="errors.first('lastName')">
                <b-form-input
                    v-validate="'required|alpha_spaces'"
                    name="lastName"
                    :class="{ error: errors.has('lastName') }"
                    id="lastName"
                    type="text"
                    v-model="request.lastName"
                    :state="validateState('lastName')"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="email" label="Email:" label-for="email"
                            :invalid-feedback="errors.first('email')">
                <b-form-input
                    v-validate="'required|email'"
                    name="email"
                    :class="{ error: errors.has('email') }"
                    id="email"
                    type="email"
                    v-model.number="request.email"
                    :state="validateState('email')"

                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="phone" label="Phone:" label-for="phone"
                            :invalid-feedback="errors.first('phone')">
                <b-form-input
                    v-validate="'required|numeric|length:9'"
                    name="phone"
                    :class="{ error: errors.has('phone') }"
                    id="phone"
                    type="number"
                    v-model="request.phone"
                    :state="validateState('phone')"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div>
                <b-form-select v-model="selected" :options="options"/>

              </div>
              <div class="text-right mb-2 mt-4">
                <b-button type="submit" variant="success">Submit</b-button>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6" lg="4">
          <div class="text-center">
            <h3>Our Contact Info</h3>
            <h5>Otherwise feel free to contact us yourself</h5>
          </div>
          <b-card bg-variant="white" text-variant="primary bold" class="text-center">
            <div class="text-left">
              <p><strong>Our phone number:</strong> 456345789</p>
              <p><strong>Our addresses:</strong></p>
              <p>Murlington, Kitchen Desk 1</p>
              <p>Murlington, Rosemary Bushes 7</p>
              <p><strong>Working hours:</strong> 12.00 - 24.00</p>
              <p><em>Please feel free to call us at any time!</em></p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'requests',
        data() {
            return {
                file: null,
                request: {},
                selected: null,
                options: [
                    {value: null, text: 'Please select what complex you are interested in'},
                    {value: 'Crown Jewel', text: 'Crown Jewel'},
                    {value: 'Modern Quarters', text: 'Modern Quarters'},
                    {value: 'Lux Condo', text: 'Lux Condo'},
                ]
            }
        },
        methods: {
            async onSubmit(evt) {
                evt.preventDefault();
                await this.$validator.validateAll()
                if (!this.errors.any()) {
                    debugger
                   await axios.post('http://localhost:3000/requests', this.request);
                    window.open('http://localhost:8080/home');
                }
            }
            ,
            validateState(ref) {
                if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
                    return !this.errors.has(ref)
                }
                return null
            }

        }
        ,
        // async created() {
        //     const response = await
        //         axios.get('http://localhost:3000/requests');
        //     this.request = response.data;
        // }
    }

</script>

