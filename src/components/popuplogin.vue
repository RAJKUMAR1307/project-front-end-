<template>
  <div>
  <b-container>
   <!--popup start for login--> 
    <div>
    <b-container>   
       <b-modal id="modal-1" title="Login" hide-footer>
          <b-form ref="form" @submit.stop.prevent="onSubmit">
             
             <b-form-group>
               <b-form-radio-group v-model="selected">
                 <b-container>
                   <b-row>  
                     <b-col>
                       <b-form-radio id="admr" v-model="selected" v-bind:value="1" > Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="clgr" v-model="selected" v-bind:value="2"> College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="stur" v-model="selected" v-bind:value="3"> Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
              </b-form-group><br>
             
            <b-form-group id="log-grp-2" label="User Name" label-for="un">
               <b-form-input id="un" name="un"   v-model="$v.form.uname.$model"
                  :state="validateState('uname')" placeholder="Enter your Username">
               </b-form-input>
               
               <b-form-invalid-feedback  id="unameerr" >
                   This is a required field and must be at least 6 characters.
               </b-form-invalid-feedback>
            </b-form-group><br>
            
            <b-form-group  id="log-grp-2" label="Password" label-for="pw">
               <b-form-input id="pw" name="pw" v-model="$v.form.pass.$model"
                  :state="validateState('pass')" placeholder="Enter your Password" >
               </b-form-input>
               
               <b-form-invalid-feedback id="passerr" >
                 This is a required field and must be at least 6 characters.
               </b-form-invalid-feedback>
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3"  @click="resetForm()">Reset</b-button>
           </div>
              
         </b-form>
       </b-modal>
       </b-container>   
    </div>
    <!--popup end for login--> 
 </b-container>   
 </div>
</template>


<script>
import { validationMixin } from 'vuelidate'
import { required,  minLength} from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  mixins: [validationMixin],
  data() {
      return {
          selected: '1',
          role:'',
          form: {
          uname:null,
          pass:null,
         }
      };
    },
    validations: {
    form: {
      uname: {
        required,
        minLength: minLength(6)
      },
      pass: {
        required,
        minLength: minLength(6)
      },
  }
    },
  methods: {
    validateState(uname) {
      const { $dirty, $error } = this.$v.form[uname];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        uname:null,
        pass:null,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  onSubmit() {
      this.$v.form.$touch();
if (this.selected==1) {
    if (this.$v.form.$anyError) {
        return;
      }
        alert("Admin Form submitted!");
        window.open("adminlogin");
       location.reload();
}
else if (this.selected==2) {
if (this.$v.form.$anyError) {
        return;
      }
        alert("College Form submitted!");
        window.open("collegelogin");
       location.reload();
}
else if (this.selected==3) {
if (this.$v.form.$anyError) {
        return;
      }
        alert("Student Form submitted!");
        window.open("studentlogin");
       location.reload();
}
    }
  }
};
</script>
    