<template>
   <div>
   
       <div>    
         <NavBar />
       </div>
     
       <div>
        <b-container>
          <h1>Approve Institute</h1><br><br>
            <b-table-simple  responsive >      
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>ID</b-th>
                  <b-th>College Name</b-th>
                  <b-th>Username</b-th>
                  <b-th>Password</b-th>
                  <b-th>College Phone number</b-th>
                  <b-th>College postal address</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="c in colleges" v-bind:key="c.id">
                  <b-td>{{c.id}}</b-td>
                  <b-td>{{c.collegeName}}</b-td>
                  <b-td>{{c.username}}</b-td>
                  <b-td>{{c.password}}</b-td>
                  <b-td>{{c.collegePhoneNumber}}</b-td>
                  <b-td>{{c.collegePostalAddress}}</b-td>           
                </b-tr>     
              </b-tbody>
            </b-table-simple><br><br><br><br>
        
            
            <div class="text-center">
                <b-button type="button" variant="outline-danger" class="mx-5"><router-link to="/adminlogin"> Back </router-link></b-button>
            </div><br>
              
        </b-container>
       </div>
       
       <div class="pt-5" sticky>
       <Footer />
     </div>
</div>
</template>

<script>

import NavBar from './Navbar'
import Footer from './Footer'
import CollegeService from '../service/CollegeService'
export default {
  name: 'Approveinstitute',
  components:{
        NavBar,
        Footer
  },
  data(){
        return{
            
            colleges: '',
        }
    },
    mounted(){
        this.getAllColleges();
    },
    methods:{
        getAllColleges: function(){
            return new Promise((resolve, reject) => {
                CollegeService.getAllColleges()
                .then((response) => {    
                    this.colleges = response.data;             
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
