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
         <b-button href="#" variant="primary"  v-b-modal.modal-6 >Click here</b-button>
       </b-card><br>
       </b-container>
       </div> 
     
         
       <div class="text-center">          
           <b-button type="button" variant="outline-danger " class="mx-3"><router-link to="/collegelogin">Back</router-link></b-button>
       </div><br>
       
       
       
       <!--popup start for Add Faculty--> 
    <div >
       <b-modal id="modal-4" title="Add Faculty" hide-footer>
          
          
            <div class="form-row">
              <div class="form-group">
                <label>Faculty name:</label>
                 <b-form-input type="text" class="form-control" v-model.trim="$v.faculty.facultyName.$model" :class="{'is-invalid':$v.faculty.facultyName.$error, 'is-valid':!$v.faculty.facultyName.$invalid}" placeholder="Enter your faculty name">        
                 </b-form-input>
                 <div class="valid-feedback">faculty name is valid!</div>
                 <div class="invalid-feedback">
                 <span v-if="!$v.faculty.facultyName.required">faculty name is required</span>
                 </div> 
              </div><br>
          
             <div class="form-group">
              <label>Qualification:</label>
               <b-form-input type="text" class="form-control" v-model.trim="$v.faculty.qualification.$model" :class="{'is-invalid':$v.faculty.qualification.$error, 'is-valid':!$v.faculty.qualification.$invalid}" placeholder="Enter your Qualification">        
               </b-form-input>
               <div class="valid-feedback">Qualification is valid!</div>
               <div class="invalid-feedback">
               <span v-if="!$v.faculty.qualification.required">Qualification is required</span>
               </div>
             </div><br>
             
             
             <div class="form-group">
             <label>Experience In Years:</label>
             <input type="number" class="form-control" v-model.number.lazy="$v.faculty.experience.$model" :class="{'is-invalid':$v.faculty.experience.$error, 'is-valid':!$v.faculty.experience.$invalid}" 
               placeholder="Enter your Experience">
             
             <div class="valid-feedback">Experience is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.faculty.experience.required">Experience is required</span>
             </div>
            </div><br>
          
           <div class="form-group">
              <label>Skill set:</label>
               <b-form-input type="text" class="form-control" v-model.trim="$v.faculty.skillSet.$model" :class="{'is-invalid':$v.faculty.skillSet.$error, 'is-valid':!$v.faculty.skillSet.$invalid}" placeholder="Enter your skill Set">        
               </b-form-input>
               <div class="valid-feedback">Skill Set is valid!</div>
               <div class="invalid-feedback">
               <span v-if="!$v.faculty.skillSet.required">Skill Set is required</span>
               </div>
            </div><br>
         
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="putFaculty()"> Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" @click="resetForm()">Reset</b-button>
            </div>
         </div>
       </b-modal>
    </div>
    <!--popup end for Add Faculty--> 
    
     <!--popup start for  Faculty Table--> 
    <div >
       <b-modal id="modal-6" title="Faculty information" hide-footer>
       <b-container>
          <b-table-simple hover responsive >
            <b-thead head-variant="dark">
                <b-tr>
                  <b-th>ID</b-th>
                  <b-th>Faculty name</b-th>
                  <b-th>Qualification</b-th>
                  <b-th>Experience</b-th>
                  <b-th>Skill set</b-th>
                  <b-th>Action</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="f in facultys" v-bind:key="f.id">
                  <b-td>{{f.id}}</b-td>
                  <b-td>{{f.facultyName}}</b-td>
                  <b-td>{{f.qualification}}</b-td>
                  <b-td>{{f.experience}}</b-td>
                  <b-td>{{f.skillSet}}</b-td>
                  <b-td>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getFaculty(f.id)" v-b-modal.modal-5></b-icon></span>
                    <span> / </span>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteFaculty(f.id)"></b-icon></span>                
                  </b-td>             
                </b-tr>     
              </b-tbody>
         </b-table-simple><br><br><br><br> 
         </b-container> 
       </b-modal>
    </div>
    <!--popup end for Faculty Table--> 
    
     <!--popup start for Update Faculty--> 
    <div >
       <b-modal id="modal-5" title="Update Faculty" hide-footer>
          <b-form ref="form" >
          
            <b-form-group label="Faculty name:">
                  <b-form-input  type="text" v-model="faculty.facultyName">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Qualification:" >
                 <b-form-input  type="text" v-model="faculty.qualification">
                 </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Experience In Years:">
               <b-form-input type="number" v-model="faculty.experience">
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Skill set:">
                <b-form-input type="text" v-model="faculty.skillSet">
                </b-form-input>
            </b-form-group><br>
                   
            
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="updateFaculty()">Update</b-button>
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

import { required, minLength, maxLength } from "vuelidate/lib/validators";
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
  validations: {
    faculty: {
      facultyName: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      },
      qualification: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(30)
      },
      experience: {
       required,
        minLength: minLength(1),
        maxLength: maxLength(2),
      },
      skillSet: {
        required,
        minLength: minLength(3)
      },
    }
  },
  mounted(){
         this.getAllFacultys();
       //  this.logout(); 
    },
    methods:{
   
        putFaculty: function(){ 
        this.$v.$touch()
          if(this.$v.$invalid){
           this.submitstatus = "FAIL"
          }
          else {
           this.submitstatus = "SUCCESS"             
        return new Promise((resolve, reject) => {
            FacultyService.putFaculty(this.faculty)
                .then(response => {
                alert ("faculty registered successfully!!!!!");
                    this.faculty.facultyName ="";
                    this.faculty.qualification ="";
                    this.faculty.experience ="";
                    this.faculty.skillSet ="";
                    window.location.reload();
                    
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });    
        }    
    },
    getAllFacultys: function(){
            return new Promise((resolve, reject) => {
                FacultyService.getAllFacultys()
                .then((response) => {                       
                    this.facultys = response.data;   
                    console.log (this.facultys);          
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        deleteFaculty: function(id){
            return new Promise((resolve, reject) => {
                FacultyService.deleteFaculty(id)
                .then((response) => { 
                    alert ("Faculty deleted successfully!!!!!");   
                    this.facultys = response.data; 
                    this.getAllFacultys();            
                    resolve(response);
                }).catch((err) => {
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
    },
    resetForm() {
      this.faculty = {
      facultyName: null,
      qualification: null,
      experience: null,
      skillSet: null      
     };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
        
    //    logout: function(){                                    
    //         localStorage.setItem('status','verified')
    //         }      
              
    }   
 }            

</script>

<style scoped>
a{
   color: red;
   text-decoration: none!important;
   } 
</style>

