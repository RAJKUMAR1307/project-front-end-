<template>
   <div>
     
       <div>    
         <NavBar />
       </div>
       
       <div>           
           <h1>Students List</h1>
       </div>
       
       
       <b-container>
          <b-table-simple class="table table-striped table-bordered" responsive>
            <b-thead>
                <b-row>
                  <b-col>ID</b-col>
                  <b-col>First Name</b-col>
                  <b-col>Last name</b-col>
                  <b-col>Username</b-col>
                  <b-col>Mobile Number</b-col>
                  <b-col>E-mail</b-col>
                  <b-col>Address</b-col>
                  <b-col>College</b-col>
                  <b-col>Action</b-col>
                </b-row>
            </b-thead>
            <b-tbody>
                <b-row v-for="s in students" v-bind:key="s.id">
                  <b-col>{{s.id}}</b-col>
                  <b-col>{{s.firstName}}</b-col>
                  <b-col>{{s.lastName}}</b-col>
                  <b-col>{{s.username}}</b-col>
                  <b-col>{{s.mobileNumber}}</b-col>
                  <b-col>{{s.email}}</b-col>  
                  <b-col>{{s.address}}</b-col>  
                  <b-col>{{s.collegeselected}}</b-col>
                  <b-col>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" ></b-icon></span>
                    <span> / </span>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteStudent(s.id)"></b-icon></span>                
                </b-col>             
                </b-row>     
              </b-tbody>
         </b-table-simple>
      </b-container>
      
            <div class="text-center">
                <b-button type="button" variant="outline-danger " class="mx-5"><router-link to="/adminlogin"> <span>Back</span> </router-link></b-button>
            </div><br>

       <div>  
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
        }
        
        
    }
  }

  
</script>
<style scoped>
 
thead {
  text-align: center;
  background-color: black;
  color: white;
}

  
</style>
