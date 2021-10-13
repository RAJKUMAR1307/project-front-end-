<template>
   <div>
     
       <div>    
         <NavBar />
       </div>
       
       <div>           
          <h1>Student Information</h1>
       </div>
       
       
       <b-container>
          <b-table-simple hover responsive >
            <b-thead head-variant="dark">
                <b-tr>
                  <b-th>ID</b-th>
                  <b-th>First Name</b-th>
                  <b-th>Last name</b-th>
                  <b-th>Username</b-th>
                  <b-th>Password</b-th>
                  <b-th>Mobile Number</b-th>
                  <b-th>E-mail</b-th>
                  <b-th>Address</b-th>
                  <b-th>College</b-th>
                  <b-th>Action</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="s in students" v-bind:key="s.id">
                  <b-td>{{s.id}}</b-td>
                  <b-td>{{s.firstName}}</b-td>
                  <b-td>{{s.lastName}}</b-td>
                  <b-td>{{s.username}}</b-td>
                  <b-td>{{s.password}}</b-td>
                  <b-td>{{s.mobileNumber}}</b-td>
                  <b-td>{{s.email}}</b-td>  
                  <b-td>{{s.address}}</b-td>  
                  <b-td>{{s.collegeselected}}</b-td>
                  <b-td>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getStudent(s.id)" v-b-modal.editstd></b-icon></span>
                    <span> / </span>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteStudent(s.id)"></b-icon></span>                
                </b-td>             
                </b-tr>     
              </b-tbody>
         </b-table-simple><br><br><br><br>
      </b-container>
      
            <div class="text-center">
                <b-button type="button" variant="outline-danger " class="mx-5"><router-link to="/adminlogin"> <span>Back</span> </router-link></b-button>
            </div><br>
            
       <!--popup start for Student Register Update--> 
       <div >
       <b-modal id="editstd" title="Edit Student" hide-footer>
          <b-form ref="form">
          
            <b-form-group  label="First name:">
                  <b-form-input   type="text"  v-model="student.firstName">
                  </b-form-input>   
            </b-form-group><br>
            
            <b-form-group label="Last name:">
                 <b-form-input  type="text"  v-model="student.lastName">
                 </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Username:">
                 <b-form-input  type="text"  v-model="student.username">
                 </b-form-input> 
            </b-form-group><br>
             
            
            <b-form-group label="Password:" >
               <b-form-input type="password"  v-model="student.password">
                </b-form-input>
            </b-form-group><br>
            
         
            <b-form-group label="Mobile Number:">
               <b-form-input type="number" v-model="student.mobileNumber">
               </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="E-mail:">
               <b-form-input type="text" v-model="student.email" >
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Address:"> 
               <b-form-textarea cols="35" rows="4" v-model="student.address" >
               </b-form-textarea>
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit" @click="updateStudent()">Update</b-button>
            </div>
              
          
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Student Register--> 

       <div class="pt-5" sticky>
         <Footer />
       </div>
   
  </div>
</template>

<script>

  
  import NavBar from './Navbar'
  import Footer from './Footer'
  import StudentService from '../service/StudentService'
  export default {
       name: "Viewstudents",
  components: {
    NavBar,
    Footer
  },
    data() {
      return {
       student: {            
              firstName: "",
              lastName: "",
              username: "",
              password: "",
              mobileNumber: "",
              email: "",
              address: ""
            },
        students: '',
      }
    },
    mounted(){
        this.getAllStudents();
    },
    methods:{
        getAllStudents: function(){
            return new Promise((resolve, reject) => {
                StudentService.getAllStudents()
                .then((response) => {                       
                    this.students = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        deleteStudent: function(id){
            return new Promise((resolve, reject) => {
                StudentService.deleteStudent(id)
                .then((response) => { 
                    alert ("students deleted successfully!!!!!");   
                    this.students = response.data; 
                    this.getAllStudents();            
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        getStudent: function(id){
            return new Promise((resolve, reject) => {
                StudentService.getStudent(id)
                .then((response) => {       
                    this.student = response.data;                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        updateStudent: function(){           
        return new Promise((resolve, reject) => {
            StudentService.updateStudent(this.student)
                .then(response => {
                alert ("Student updated successfully!!!!!");
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },
    // logout: function(){                                    
    //         localStorage.setItem('status','verified')
    //        }
    }
  }

  
</script>
<style scoped>
 
thead {
  text-align: center;
  padding: 3px;
  background-color: black;
  color: white;
}
table {
 border: 50px;
}
a{
   color: red;
   text-decoration: none!important;
   } 
</style>
