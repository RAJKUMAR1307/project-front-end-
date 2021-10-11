<template>
  <div>
   
    <!--popup start for Student Register--> 
    <div class="form-row">
       <div class="form-group">
             <label>First name:</label>
             <b-form-input type="text" class="form-control" v-model.trim="$v.student.firstName.$model" :class="{'is-invalid':$v.student.firstName.$error, 'is-valid':!$v.student.firstName.$invalid}" placeholder="Enter your First name">        
             </b-form-input>
             <div class="valid-feedback">Your First name is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.student.firstName.required">First name is required</span>
             </div> 
       </div><br>
       
       <div class="form-group">
             <label>Last name:</label>
             <b-form-input type="text" class="form-control" v-model.trim="$v.student.lastName.$model" :class="{'is-invalid':$v.student.lastName.$error, 'is-valid':!$v.student.lastName.$invalid}" placeholder="Enter your Last name">        
             </b-form-input>
             <div class="valid-feedback">Your Last name is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.student.lastName.required">Last name is required</span>
             </div> 
       </div><br>  
       
       <div class="form-group">
             <label>Username :</label>
             <b-form-input type="text" class="form-control" v-model.trim="$v.student.username.$model" :class="{'is-invalid':$v.student.username.$error, 'is-valid':!$v.student.username.$invalid}" placeholder="Enter your  Username">        
             </b-form-input>
             <div class="valid-feedback">Your Username  is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.student.username.required">Username is required</span>
             </div> 
       </div><br>                  
            
       <div class="form-group">
             <label>Password:</label>
             <b-form-input type="password" class="form-control" v-model.trim="$v.student.password.$model" :class="{'is-invalid':$v.student.password.$error, 'is-valid':!$v.student.password.$invalid}" placeholder="Enter your Password">        
             </b-form-input>
             <div class="valid-feedback">Your Password is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.student.password.required">Password is required</span>
             </div>
        </div><br>
        
        <div class="form-group">
             <label>Mobile Number</label>
             <b-form-input type="number" class="form-control" v-model.number.lazy="$v.student.mobileNumber.$model" :class="{'is-invalid':$v.student.mobileNumber.$error, 'is-valid':!$v.student.mobileNumber.$invalid}" 
               placeholder="Enter your Mobile Number">
             </b-form-input>
             <div class="valid-feedback">Your number is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.student.mobileNumber.required">Phone number is required and it must be 10 numbers</span>
             </div>
        </div><br>     
            
         <div class="form-group">
            <label>E-mail:</label>
            <b-form-input type="email" class="form-control" v-model.trim="$v.student.email.$model" :class="{'is-invalid':$v.student.email.$error, 'is-valid':!$v.student.email.$invalid}" placeholder="Enter your email">
            </b-form-input>
            <div class="valid-feedback">Your email is valid!</div>
            <div class="invalid-feedback">
            <span v-if="!$v.student.email.required">Email is required</span>
            <span v-if="!$v.student.email.isUnique">Enter your proper email</span>
            </div>
         </div><br>
        
        
          <div class="form-group">
             <label>Address:</label>
               <b-form-textarea cols="35" rows="4" class="form-control" v-model="$v.student.address.$model" :class="{'is-invalid':$v.student.address.$error, 'is-valid':!$v.student.address.$invalid}"
                  placeholder="Enter your  Address" >
               </b-form-textarea>
               <div class="valid-feedback">Your  Address is valid!</div>
               <div class="invalid-feedback">
                <span v-if="!$v.student.address.required"> Address is required</span>
              </div> 
          </div><br>
      
            
                     
            <b-form-group label="College:" >
               <b-form-select class="form-control"  v-model="student.collegeselected" :options="student.option" >    
               </b-form-select>                
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit" @click="putStudent()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" @click="resetForm()">Reset</b-button>
            </div>
         
    </div>
    <!--popup end for Student Register--> 
      
 </div>
</template>


<script>

import { required, minLength, maxLength, email } from "vuelidate/lib/validators";
import StudentService from '../service/StudentService'
export default {
 name: "popupstu",
     components: {
     
       },
    data(){
        return{
             student: {
              firstName: "",
              lastName: "",
              username: "",
              password: "",
              mobileNumber: "",
              email: "",
              address: "",
              collegeselected: null,
              option: [
                { value: null, text: "Choose..." , disabled: true},
                { value: "srm", text: "SRM" },
                { value: "kln", text: "KLN" },
                { value: "ldc", text: "LDC" },
                { value: "mku", text: "MKU" }
                ]
            },
             
        }
    },
    validations: {
    student: {
      firstName: {
        required,
        minLength: minLength(5)
      },
      lastName: {
        required,
        minLength: minLength(5)
      },
      username: {
        required,
        minLength: minLength(6)
      },
     password: {
        required,
        minLength: minLength(6)
      },
      mobileNumber: {
       required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      email: {
            required,
            email,
            isUnique (value) {
                if(value === '') return true
                var email_regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return new Promise((resolve) => {
                    setTimeout(() => {
                            resolve(email_regex.test(value))
                    }, 350 + Math.random() * 300)
                })
            }
            },
     address: {
        required,
        minLength: minLength(5)
      },
    }
  },
    methods:{
   
        putStudent: function(){  
        this.$v.$touch()
          if(this.$v.$invalid){
           this.submitstatus = "FAIL"
          }
          else {         
        return new Promise((resolve, reject) => {
            StudentService.putStudent(this.student)
                .then(response => {
                alert ("student registered successfully!!!!!"); 
                    this.student.firstName ="";
                    this.student.lastName ="";
                    this.student.username ="";
                    this.student.password ="";
                    this.student.mobileNumber ="";
                    this.student.email ="";
                    this.student.address ="";
                    this.student.collegeselected ="";
                    this.student.option ="null";
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
      this.student = {
      firstName: null,
      lastName: null,
      username: null,
      password: null,
      mobileNumber: null,
      email: null,
      address: null,
      collegeselected: null      
     };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }      
    }   
 }                  
   

</script>
