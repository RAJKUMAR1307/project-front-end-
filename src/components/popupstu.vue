<template>
  <div>
   
    <!--popup start for Student Register--> 
    <div >
       <b-modal id="modal-3" title="Student Register" hide-footer>
          <b-form ref="form" >
          
            <b-form-group  label="First name:" >
               <b-form-input  type="text" v-model="student.firstName" placeholder="Enter your First name">
               </b-form-input>                  
            </b-form-group><br>
            
            
            <b-form-group label="Last name:">
               <b-form-input type="text" v-model="student.lastName" placeholder="Enter your Last name">
               </b-form-input>               
           </b-form-group><br>
            
            <b-form-group label="Username:" >
                 <b-form-input type="text" v-model="student.username" placeholder="Enter your Username">
                 </b-form-input>
            </b-form-group><br>
            

           
            <b-form-group label="Password:">
                <b-form-input  type="password" v-model="student.password"  placeholder="Enter your Password" >
                </b-form-input>
             </b-form-group><br>
            
            <b-form-group label="Mobile Number:">
               <b-form-input type="number" v-model="student.mobileNumber" placeholder="Enter your Mobile Number" >
               </b-form-input>
            </b-form-group><br>

            
            
            <b-form-group label="E-mail:">
               <b-form-input type="text" v-model="student.email" placeholder="Enter your E-mail">
               </b-form-input>
            </b-form-group><br>
            
            
            <b-form-group label="Address:">
               <b-form-textarea cols="35" rows="4"  v-model="student.address" placeholder="Enter your Address" >
               </b-form-textarea>
            </b-form-group><br>
      
            
                     
            <b-form-group label="College:" >
               <b-form-select class="form-control"  v-model="student.collegeselected" :options="student.option" >    
               </b-form-select>                
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit" @click="putStudent()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3">Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Student Register--> 
      
 </div>
</template>


<script>


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
     mounted(){
        // this.getAllStudents();
    },
    methods:{
   
        putStudent: function(){           
        return new Promise((resolve, reject) => {
            StudentService.putStudent(this.student)
                .then(response => {
                    this.student.firstName ="";
                    this.student.lastName ="";
                    this.student.username ="";
                    this.student.password ="";
                    this.student.mobileNumber ="";
                    this.student.email ="";
                    this.student.address ="";
                    this.student.collegeselected ="";
                    this.student.option ="null";
                    
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },          
    }   
 }                  
   

</script>