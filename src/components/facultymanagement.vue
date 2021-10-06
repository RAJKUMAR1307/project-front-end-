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
         <b-button href="#" variant="primary" v-b-modal.modal-5>Click here</b-button>
       </b-card><br>
       </b-container>
       </div> 
     
         
       <div class="text-center">          
           <b-button type="button" variant="outline-danger " class="mx-3"><router-link to="/collegelogin"> <span>Back</span> </router-link></b-button>
       </div><br>
       
       
       
       <div>  
         <Footer />
       </div>
     
     
     
     
   
  </div>
</template>

<script>


import NavBar from './Navbar'
import Footer from './Footer'
export default {
  name: 'homepage',
  components:{
        NavBar,
        Footer
  },
  }
</script>


