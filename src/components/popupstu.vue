<template>
  <div>
   
    <!--popup start for Student Register--> 
    <div >
       <b-modal id="modal-3" title="Student Register" hide-footer>
          <b-form ref="form" >
          
            <b-form-group  label="First name:" >
               <b-form-input  type="text" v-model="$v.form.Fns.$model" placeholder="Enter your First name">
               </b-form-input>                  
            </b-form-group><br>
            
            
            <b-form-group label="Last name:">
               <b-form-input type="text" v-model="$v.form.Lns.$model" placeholder="Enter your Last name">
               </b-form-input>               
           </b-form-group><br>
            
            <b-form-group label="Username:" >
                 <b-form-input type="text" v-model="$v.form.Uns.$model" placeholder="Enter your Username">
                 </b-form-input>
            </b-form-group><br>
            

           
            <b-form-group label="Password:">
                <b-form-input  type="password" v-model="$v.form.Pws.$model"  placeholder="Enter your Password" >
                </b-form-input>
             </b-form-group><br>
            
            <b-form-group label="Mobile Number:">
               <b-form-input type="number" v-model="$v.form.Mns.$model" placeholder="Enter your Mobile Number" >
               </b-form-input>
            </b-form-group><br>

            
            
            <b-form-group label="E-mail:">
               <b-form-input type="text" v-model="$v.form.Mails.$model" placeholder="Enter your E-mail">
               </b-form-input>
            </b-form-group><br>
            
            
            <b-form-group label="Address:">
               <b-form-textarea cols="35" rows="4"  v-model="$v.form.Adds.$model" placeholder="Enter your Address" >
               </b-form-textarea>
            </b-form-group><br>
      
            
                     
            <b-form-group label="College:" id="example-input-group-13">
               <b-form-select class="form-control"  id="example-input-13"  name="example-input-13" v-model="$v.form.dop.$model"
                 :options="dop" :state="validateState('dop')">    
               </b-form-select>  
               
                <b-form-invalid-feedback  id="input-13-live-feedback">This is a required field and must select any 1
               </b-form-invalid-feedback>              
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" @click="resetForm()">Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Student Register--> 
      
 </div>
</template>


<script>


import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
    
      dop: [
        { value: null, text: "Choose..." , disabled: true},
        { value: "1", text: "SRM" },
        { value: "2", text: "KLN" },
        { value: "3", text: "LDC" },
        { value: "4", text: "MKU" }
         ],
         
   
      
      form: {
        Fns: null,
        Lns: null,
        Uns: null,
        Pws: null,
        Mns: null,
        Mails: null,
        dop: null,
        Adds: null
      }
    };
  },
  validations: {
    form: {
      Lns: {
        required,
        minLength: minLength(6)
      },
      Fns: {
        required,
        minLength: minLength(6)
      },
      Uns: {
        required,
        minLength: minLength(6)
      },
      Pws: {
        required,
        minLength: minLength(6)
      },
      Mns: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      Mails: {
         required,
         email,
      },
      Adds: {
        required,
        minLength: minLength(8)
      },
       dop: {
       required,
       },
    }
  },
  methods: {
    validateState(Fns) {
      const { $dirty, $error } = this.$v.form[Fns];
      return $dirty ? !$error : null;
    },
    
    resetForm() {
      this.form = {
        Fns: null,
        Lns: null,
        Uns: null,
        Pws: null,
        Mns: null,
        Mails: null,
        dop: null,
        Adds: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Student registered successfully !!!");
      location.reload();
    }
  }
};

</script>