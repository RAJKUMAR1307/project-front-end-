<template>
  <div>


    <!--popup start for College Register--> 
   
        <div class="form-row">
          <div class="form-group">
             <label>College Name</label>
             <b-form-input type="text" class="form-control" v-model.trim="$v.college.collegeName.$model" :class="{'is-invalid':$v.college.collegeName.$error, 'is-valid':!$v.college.collegeName.$invalid}" placeholder="Enter your college name">        
             </b-form-input>
             <div class="valid-feedback">Your college name is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.college.collegeName.required">College Name is required</span>
             </div> 
           </div><br>
          
           <div class="form-group">
             <label>Username:</label>
             <b-form-input type="text" class="form-control" v-model.trim="$v.college.username.$model" :class="{'is-invalid':$v.college.username.$error, 'is-valid':!$v.college.username.$invalid}" placeholder="Enter your Username">        
             </b-form-input>
             <div class="valid-feedback">Your Username is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.college.username.required">Username is required</span>
             </div>
           </div><br>
           
         <div class="form-group">
             <label>Password:</label>
             <b-form-input type="password" class="form-control" v-model.trim="$v.college.password.$model" :class="{'is-invalid':$v.college.password.$error, 'is-valid':!$v.college.password.$invalid}" placeholder="Enter your Password">        
             </b-form-input>
             <div class="valid-feedback">Your Password is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.college.password.required">Password is required</span>
             </div>
           </div><br>
            
             
            
         <div class="form-group">
             <label>College Phone Number</label>
             <input type="number" class="form-control" v-model.number.lazy="$v.college.collegePhoneNumber.$model" :class="{'is-invalid':$v.college.collegePhoneNumber.$error, 'is-valid':!$v.college.collegePhoneNumber.$invalid}" 
               placeholder="Enter your clg phone Number">
             
             <div class="valid-feedback">Your number is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.college.collegePhoneNumber.required">Phone number is required and it must be 10 numbers</span>
             </div>
          </div><br>
            
         
            
           <div class="form-group">
             <label>CollegePostalAddress:</label>
               <b-form-textarea cols="35" rows="4" class="form-control" v-model="$v.college.collegePostalAddress.$model" :class="{'is-invalid':$v.college.collegePostalAddress.$error, 'is-valid':!$v.college.collegePostalAddress.$invalid}"
                  placeholder="Enter your college Address" >
               </b-form-textarea>
               <div class="valid-feedback">Your college Address is valid!</div>
               <div class="invalid-feedback">
                <span v-if="!$v.college.collegePostalAddress.required">College Address is required</span>
              </div> 
             </div><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit" @click="putCollege()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" @click="resetForm()">Reset</b-button>
            </div>
              
       </div>   
        
     
       
    
    <!--popup end for College Register--> 
    

  </div>
</template>


<script>

import { required, minLength, maxLength } from "vuelidate/lib/validators";
import CollegeService from '../service/CollegeService'
export default {
 name: "popupclg",
     components: {
     
       },
    data(){
        return{
             college: {
               id:'',
              collegeName: '',
              username: '',
              password: '',
              collegePhoneNumber: '',
              collegePostalAddress: ''
            },
             
        }
    },
    validations: {
    college: {
      collegeName: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(30)
      },
      username: {
        required,
        minLength: minLength(6)
      },
     password: {
        required,
        minLength: minLength(6)
      },
      collegePhoneNumber: {
       required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      collegePostalAddress: {
        required,
        minLength: minLength(5)
      },
    }
  },
    methods:{
   
        putCollege: function(){  
        this.$v.$touch()
          if(this.$v.$invalid){
           this.submitstatus = "FAIL"
          }
          else {
           this.submitstatus = "SUCCESS"    
          return new Promise((resolve, reject) => {
            CollegeService.putCollege(this.college)
                .then(response => {
                 alert ("colleges registered successfully!!!!!");
                   this.college.collegeName ="";
                   this.college.username ="";
                   this.college.password ="";
                   this.college.collegePhoneNumber ="";
                   this.college.collegePostalAddress ="";
                    window.location.reload();
                    
                   resolve(response);
                  })
                  .catch(err => {
                    reject(err);
                  });
         });  
        }       
    },
      resetForm() {
      this.college = {
      collegeName: null,
      username: null,
      password: null,
      collegePhoneNumber: null,
      collegePostalAddress: null      
     };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
    
              
    }   
 }            

</script>
