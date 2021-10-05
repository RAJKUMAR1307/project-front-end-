<template>
  <div>
    <div>    
       <NavBar />
     </div>
     <div>    
       <b-container>
         <h1>Colleges</h1>
        </b-container>
     </div>
     
     <div>
        <b-container>
            <b-table-simple responsive>      
              <b-thead head-variant="dark">
                <b-row>
                  <b-col>ID</b-col>
                  <b-col>College Name</b-col>
                  <b-col>Action</b-col>
                </b-row>
              </b-thead>
              <b-tbody>
                <b-row v-for="c in colleges" v-bind:key="c.id">
                  <b-col>{{c.id}}</b-col>
                  <b-col>{{c.collegeName}}</b-col>    
                  <b-col>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" ></b-icon></span>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteCollege(c.id)"></b-icon></span>                
                </b-col>     
                </b-row>     
              </b-tbody>
            </b-table-simple><br>
           
            
            <div class="text-center">
                <b-button type="button" variant="outline-danger " class="mx-5"><router-link to="/adminlogin"> Back </router-link></b-button>
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
  name: 'deleteins',
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
    },
    deleteCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.deleteCollege(id)
                .then((response) => {    
                    this.students = response.data; 
                    this.getAllColleges();            
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
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
  
</style>
