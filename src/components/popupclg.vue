<template>
  <div>


    <!--popup start for College Register--> 
    <div >
       <b-modal id="modal-2" title="College Register" hide-footer>
          <b-form ref="form">
          
            <b-form-group  label="College Name:" >
                  <b-form-input   type="text" v-model="college.collegeName">
                  </b-form-input>   
            </b-form-group><br>
            
            <b-form-group label="Username:" >
                 <b-form-input  type="text" v-model="college.username">
                 </b-form-input> 
            </b-form-group><br>
             
            
            <b-form-group label="Password:" >
               <b-form-input type="password" v-model="college.password">
                </b-form-input>
            </b-form-group><br>
            
         
            <b-form-group label="CollegePhoneNumber">
               <b-form-input type="number" v-model="college.collegePhoneNumber">
               </b-form-input> 
            </b-form-group><br>
            
            
            <b-form-group label="CollegePostalAddress">
               <b-form-input type="text"  v-model="college.collegePostalAddress">
                </b-form-input>
            </b-form-group><br>
            
   
              <b-button class="btn btn-primary mt-3"  @click="putCollege()">
                  Submit</b-button>
              
          
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
              collegepPostalAddress: ""
            },
             
        }
    },
     mounted(){
        // this.getAllStudents();
    },
    methods:{
   
        putCollege: function(){           
        return new Promise((resolve, reject) => {
            CollegeService.putCollege(this.college)
                .then(response => {
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
    },          
    }   
 }            

</script>