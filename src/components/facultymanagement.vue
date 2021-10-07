<template>
   <div>
       
       
       <div>    
         <NavBar />
       </div>
      
       
       <div>    
         <b-container>
           <h1>Faculty Management</h1><br>
         </b-container>
       </div>
       
       <div > 
       <b-container>
       <b-card bg-variant="dark" text-variant="white" title="Add Faculty">
         <b-card-text>
           With supporting text below as a natural lead-in to additional content.
         </b-card-text>
         <b-button href="#" variant="primary" v-b-modal.modal-4>Click here</b-button>
       </b-card><br>
       <b-card bg-variant="dark" text-variant="white" title="Update Faculty information">
         <b-card-text>
           With supporting text below as a natural lead-in to additional content.
         </b-card-text>
         <b-button href="#" variant="primary" @click="getFaculty(f.id)" v-b-modal.modal-5 >Click here</b-button>
       </b-card><br>
       </b-container>
       </div> 
     
         
       <div class="text-center">          
           <b-button type="button" variant="outline-danger " class="mx-3"><router-link to="/collegelogin">Back</router-link></b-button>
       </div><br>
       
       
       
       <!--popup start for Add Faculty--> 
    <div >
       <b-modal id="modal-4" title="Add Faculty" hide-footer>
          <b-form ref="form" >
          
            <b-form-group label="Faculty name:" >
                  <b-form-input type="text" v-model="faculty.facultyName" placeholder="Enter your Faculty name">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Qualification:" >
                 <b-form-input type="text" v-model="faculty.qualification" placeholder="Enter your Qualification">
                 </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Experience:">
               <b-form-input type="number" v-model="faculty.experience" placeholder="Enter your Experience" >
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Skill set:">
                <b-form-input type="text" v-model="faculty.skillSet" placeholder="Enter your Skill set" >
                </b-form-input>
            </b-form-group><br>
            
         
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="putFaculty()"> Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" >Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Add Faculty--> 
    
     <!--popup start for Update Faculty--> 
    <div >
       <b-modal id="modal-5" title="Update Faculty" hide-footer>
          <b-form ref="form" >
          
            <b-form-group label="Faculty name:">
                  <b-form-input  placeholder="Enter your Faculty name">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Qualification:" >
                 <b-form-input placeholder="Enter your Qualification">
                 </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Experience:">
               <b-form-input type="number" placeholder="Enter your Experience" >
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Skill set:">
                <b-form-input placeholder="Enter your Skill set" >
                </b-form-input>
            </b-form-group><br>
                   
            
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="updateFaculty()">Update</b-button>
              <b-button variant="outline-danger" class="mx-3" >Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Update Faculty--> 
       
       <div>  
         <Footer />
       </div>

   
  </div>
</template>

<script>


import NavBar from './Navbar'
import Footer from './Footer'
import FacultyService from '../service/FacultyService'
export default {
  name: 'facultymanagement',
  components:{
        NavBar,
        Footer
  },
  data(){
        return{
             faculty: {
              facultyName: "",
              qualification: "",
              experience: "",
              skillSet: ""
            },
              facultys: "",
        }
  },
  mounted(){
        // this.getAllFacultys();
    },
    methods:{
   
        putFaculty: function(){           
        return new Promise((resolve, reject) => {
            FacultyService.putFaculty(this.faculty)
                .then(response => {
                alert ("faculty registered successfully!!!!!");
                    this.faculty.facultyName ="";
                    this.faculty.qualification ="";
                    this.faculty.experience ="";
                    this.faculty.skillSet ="";
                    
                    
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },
    getFaculty: function(id){
            return new Promise((resolve, reject) => {
                FacultyService.getFaculty(id)
                .then((response) => {       
                    this.faculty = response.data;                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        updateFaculty: function(){           
        return new Promise((resolve, reject) => {
            FacultyService.updateFaculty(this.faculty)
                .then(response => {
                alert ("Faculty updated successfully!!!!!");
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

<style scoped>
a{
   color: red;
   text-decoration: none!important;
   } 
</style>

