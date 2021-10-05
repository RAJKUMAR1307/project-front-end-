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
                <b-row>
                  <b-col>ID</b-col>
                  <b-col>College Name</b-col>
                  <b-col>Username</b-col>
                  <b-col>Password</b-col>
                  <b-col>College Phone number</b-col>
                  <b-col>College postal address</b-col>
                </b-row>
              </b-thead>
              <b-tbody>
                <b-row v-for="c in colleges" v-bind:key="c.id">
                  <b-col>{{c.id}}</b-col>
                  <b-col>{{c.collegeName}}</b-col>
                  <b-col>{{c.username}}</b-col>
                  <b-col>{{c.password}}</b-col>
                  <b-col>{{c.collegePhoneNumber}}</b-col>
                  <b-col>{{c.collegePostalAddress}}</b-col>           
                </b-row>     
              </b-tbody>
            </b-table-simple><br><br><br><br>
        
            
            <div class="text-center">
                <b-button type="button" variant="outline-danger" class="mx-5"><router-link to="/adminlogin">Back</router-link></b-button>
            </div><br>
              
        </b-container>
       </div>
       
       <div>  
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
  
</style>
