<template>
   <div>
     <b-container>
       <div>    
         <NavBar />
       </div>
       
       <div>    
         <b-container>
           <h1>Upload articles</h1><br>
           <h2>Select a file to upload:</h2><br><br>
         </b-container>
       </div>
     
         
       <div class="text-center" id="rr">
           <b-button href="#" type="button" variant="outline-success ">Upload</b-button>
           <b-button type="button" variant="outline-danger " class="mx-3"> <router-link to="/collegelogin"> <span>Back</span> </router-link></b-button>
       </div><br><br><br>
     </b-container>  
       
     <div>  
       <Footer />
     </div>
   
  </div>
</template>

<script>

import NavBar from './Navbar'
import Footer from './Footer'
export default {
  name: 'uploadarticles',
  components:{
        NavBar,
        Footer
  },
  mounted(){
     this.logout();
    },
        methods:{  
        logout: function(){                                    
            localStorage.setItem('status','unverified')
            }
        }
  }
</script>


<style>

span { 
text-decoration: none;
}




</style > 
