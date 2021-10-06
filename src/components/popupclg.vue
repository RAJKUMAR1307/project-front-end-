<template>
  <div>


    <!--popup start for College Register--> 
    <div >
       <b-modal id="modal-2" title="College Register" hide-footer>
          <b-form ref="form">
          
            <b-form-group  label="College Name:" >
                  <b-form-input   type="text" v-model="college.collegeName" placeholder="Enter your college name">
                  </b-form-input>   
            </b-form-group><br>
            
            <b-form-group label="Username:" >
                 <b-form-input  type="text" v-model="college.username" placeholder="Enter your Username">
                 </b-form-input> 
            </b-form-group><br>
             
            
            <b-form-group label="Password:" >
               <b-form-input type="password" v-model="college.password" placeholder="Enter your Password">
                </b-form-input>
            </b-form-group><br>
            
         
            <b-form-group label="CollegePhoneNumber:">
               <b-form-input type="number" v-model="college.collegePhoneNumber" placeholder="Enter your clg phone Number">
               </b-form-input> 
            </b-form-group><br>
            
            
            <b-form-group label="CollegePostalAddress:"> 
               <b-form-textarea cols="35" rows="4"  v-model="college.collegePostalAddress" placeholder="Enter your college Address" >
               </b-form-textarea>
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit" @click="putCollege()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3">Reset</b-button>
            </div>
              
          
         </b-form>
       </b-modal>
    </div>
    <!--popup end for College Register--> 
    

  </div>
</template>


<script>


import CollegeService from '../service/CollegeService'
export default {
 name: "popupclg",
     components: {
     
       },
    data(){
        return{
             college: {
              collegeName: "",
              username: "",
              password: "",
              collegePhoneNumber: "",
              collegePostalAddress: ""
            },
             
        }
    },
     mounted(){
        // this.getAllColleges();
    },
    methods:{
   
        putCollege: function(){           
        return new Promise((resolve, reject) => {
            CollegeService.putCollege(this.college)
                .then(response => {
                alert ("colleges registered successfully!!!!!");
                    this.college.collegeName ="";
                    this.college.username ="";
                    this.college.password ="";
                    this.college.collegePhoneNumber ="";
                    this.college.collegePostalAddress ="";
                    
                    
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    }          
    }   
 }            

</script>
