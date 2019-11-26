<template>
<div class="form">
    <v-container>
        <h2>Contact us</h2>
        <v-row justify="center">
            <v-col md="7" sm="12">
                <form :class="{'invisible' : sent}">
                    <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-textarea
                    v-model="mymessage"
                    :error-messages="messageErrors"
                    label="Message"
                    required
                    @input="$v.mymessage.$touch()"
                    @blur="$v.mymessage.$touch()"
                    ></v-textarea>
                    <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    ><span slot="label"><p>You agree to the <a @click.stop href="/privacy-policy" target="_blank">Privacy Policy</a></p></span></v-checkbox>

                    <v-btn class="mr-4 custom-button" outlined :disabled="emptyFields" @click="sendForm()">submit<v-icon>mdi-anchor</v-icon></v-btn>
                </form>
            </v-col>
        </v-row>
        <v-icon class="custom-icon">mdi-anchor</v-icon>
    </v-container>

    
   <div class="sent" :class="{'is-visible': sent}">
      <h4>Submitted</h4>
      <p>
        Your message has been successfully submitted, we will get in touch with you shortly.
      </p>
      <div class="field is-grouped">
        <div class="control">
          <v-btn class="mr-4 custom-button" outlined><nuxt-link to="/">Go Home<v-icon>mdi-anchor</v-icon></nuxt-link></v-btn>
        </div>
      </div>
    </div>

    
</div>
  
</template>

<script>
  import Config from '~/assets/config'
  import { required, email } from 'vuelidate/lib/validators'


  export default {
      

    name: 'Form',
    validations: {
      name: { required },
      email: { required, email },
      mymessage: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },
    data () {
      return {
        name: '',
        email: '',
        select: null,
        mymessage: '',
        sent: false,
        checkbox: false,
        error: false,
        disabled: true
      }
    },
    
    methods: {
      sendForm () {
        if(this.$v.name.$invalid && this.name == '') {
            this.error = true
        }

        if(this.$v.email.$invalid && this.email == '') {
            this.error = true
        }

        if(this.$v.checkbox.$invalid && this.checkbox == false) {
            this.error = true
        }

        if(this.$v.mymessage.$invalid && this.mymessage == '') {
            this.error = true
        }
        if(!this.$v.name.$invalid && this.name !== '' && !this.$v.email.$invalid && this.email !== '' && !this.$v.checkbox.$invalid && !this.$v.mymessage.$invalid && this.mymessage !== '') {

          this.sent = true
          this.error = false

          var formData = new FormData()
          formData.append('your-name', this.name)
          formData.append('your-email', this.email)
          formData.append('your-message', this.mymessage)
          this.$http
            .post(`${Config.wpDomain}${Config.api.postFormContact}`, formData)
            .then(res => {
                console.log('sent')
              
            })
            .catch(err => {
              console.log('contact send error', err)

            })
        }

        
      },

      
    },
    computed: {
       checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        this.disabled = true;
        return errors
      },
      messageErrors () {
        const errors = []
        if (!this.$v.mymessage.$dirty) return errors
        !this.$v.mymessage.required && errors.push('Item is required')
        this.disabled = true;

        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        this.disabled = true;

        this.error = true;

        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        this.disabled = true;

        return errors
      },

      emptyFields () {
          if (this.name == '' && this.email == '' && this.mymessage == '' && this.checkbox == false ) {
              return this.disabled = true
          } 
        if(!this.$v.name.$invalid && this.name !== '' && !this.$v.email.$invalid && this.email !== '' && !this.$v.checkbox.$invalid && !this.$v.mymessage.$invalid && this.mymessage !== '') {
              return this.disabled = false
          } 

          return this.disabled = true
      }
    }
  }
</script>

<style lang="scss" scoped>
.justify-center {
    justify-content: center;
}
.sent {
    opacity: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-height: 0%;
    transition: all 0.3s ease-in-out;
    min-height: 200px;
    z-index: -1;
    padding-left: 100px;

    h4 {
      font-size: 18px;
      text-transform: uppercase;
    }


    &.is-visible {
      position: relative;
      opacity: 1;
      max-height: 100%;
      z-index: 1;
    }
    p {
      line-height: 1.2;
      font-weight: 600;
      font-size: $font-size;
      margin-bottom: 25px;
    }
}

form.invisible {
    display: none;
}

.custom-button {
    margin: 0
}
h2 {
    margin-top: 50px;
}

.container {
    border-bottom: 2px solid $darkblu;
    padding-bottom: 40px;
}

.custom-icon {
    background: #394865;
    color: white;
    padding: 10px;
    width: 50px;
    border-radius: 50%;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -20px;
    transform: translateX(-50%);
}

</style>
