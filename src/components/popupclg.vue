<template>
  <div>


    <!--popup start for College Register--> 
    <div >
       <b-modal id="modal-2" title="College Register" hide-footer>
          <b-form ref="form" @submit.stop.prevent="onSubmit">
          
            <b-form-group id="example-input-group-1"  label="College Name:" label-for="example-input-1">
                  <b-form-input  id="example-input-1" name="example-input-1" v-model="$v.form.CNC.$model"
                                 :state="validateState('CNC')" placeholder="Enter your CollegeName">
                  </b-form-input> 
          
                  <b-form-invalid-feedback  id="input-1-live-feedback">This is a required field and must be at least 6 characters.
                  </b-form-invalid-feedback>
            </b-form-group><br>
            
            <b-form-group label="Username:" >
                 <b-form-input id="example-input-2"  name="example-input-2" v-model="$v.form.Unc.$model" 
                           :state="validateState('Unc')" placeholder="Enter your Username">
                 </b-form-input>
                             
                 <b-form-invalid-feedback  id="input-2-live-feedback">This is a required field and must be at least 6 characters.
                 </b-form-invalid-feedback>
            </b-form-group><br>
            
            
            <b-form-group label="Password:">
                <b-form-input id="example-input-3"  name="example-input-3" v-model="$v.form.pwc.$model" 
                    :state="validateState('pwc')" type="password" placeholder="Enter your Password" >
                </b-form-input>
               
                <b-form-invalid-feedback  id="input-3-live-feedback">This is a required field and must be at least 6 characters.
                </b-form-invalid-feedback>
            </b-form-group><br>
            
         
            <b-form-group label="College Phone Number:">
               <b-form-input id="example-input-4"  name="example-input-4" v-model="$v.form.cpn.$model" 
                    :state="validateState('cpn')" type="number" placeholder="Enter your College Phone Number" >
               </b-form-input>
            
               <b-form-invalid-feedback  id="input-4-live-feedback">This is a required field and must be 10 numbers.
               </b-form-invalid-feedback>
            </b-form-group><br>
            
            
            <b-form-group label="College Postal Address:">
               <b-form-textarea cols="35" rows="4" id="example-input-5"  name="example-input-5" v-model="$v.form.cpa.$model" 
                    :state="validateState('cpa')"  placeholder="Enter your College Postal Address" >
               </b-form-textarea>
               
               <b-form-invalid-feedback  id="input-5-live-feedback">This is a required field and must be at least 8 characters.
               </b-form-invalid-feedback>
            </b-form-group><br>
            
            <div class="text-center">
              <b-button type="submit" variant="outline-success">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" @click="resetForm()">Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for College Register--> 
    

  </div>
</template>


// <script>


// import { validationMixin } from "vuelidate";
// import { required, minLength, maxLength } from "vuelidate/lib/validators";

// export default {
//   mixins: [validationMixin],
//   data() {
//     return {
      
//       form: {
//         CNC: null,
//         Unc: null,
//         pwc: null,
//         cpn: null,
//         cpa: null
//       }
//     };
//   },
//   validations: {
//     form: {
//       Unc: {
//         required,
//         minLength: minLength(6)
//       },
//       CNC: {
//         required,
//         minLength: minLength(6)
//       },
//       pwc: {
//         required,
//         minLength: minLength(6)
//       },
//       cpn: {
//         required,
//         minLength: minLength(10),
//         maxLength: maxLength(10),
//       },
//       cpa: {
//         required,
//         minLength: minLength(8)
//       },
//     }
//   },
//   methods: {
//     validateState(CNC) {
//       const { $dirty, $error } = this.$v.form[CNC];
//       return $dirty ? !$error : null;
//     },
    
//     resetForm() {
//       this.form = {
//         CNC: null,
//         Unc: null,
//         pwc: null,
//         cpn: null,
//         cpa: null,
//       };

//       this.$nextTick(() => {
//         this.$v.$reset();
//       });
//     },
//     onSubmit() {
//       this.$v.form.$touch();
//       if (this.$v.form.$anyError) {
//         return;
//       }

//       alert("College registered successfully !!!");
//       location.reload();
//     }
//   }
// };
 

// </script>