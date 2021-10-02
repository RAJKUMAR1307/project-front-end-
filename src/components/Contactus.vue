<template>
   <div id="contactus">
   
   <div>
      <NavBar />
    </div>
     
   
     <div>
       <b-container><br>
         
         <h1>Contact Us</h1><br>
       </b-container>
   </div>
   
   <div>
    <b-container>
    <img src="conus.jpeg" height="200" width="900" class="img-fluid">
     </b-container><br>
   </div>  
   
   <div>
      <b-container>
        <b-card-group deck>
         <b-row>
           <b-col>
              <b-card border-variant="primary" header="Phone number" header-bg-variant="primary" 
                  header-text-variant="white" align="center">
                 <b-card-text><p>Mobile: 099433 67007</p><p>Phone: 0453-3255532</p><p>Mobile: 099433 67009</p></b-card-text>
              </b-card>
           </b-col>
           <b-col>
              <b-card border-variant="primary" header="E-mail" header-bg-variant="primary"
                  header-text-variant="white" align="center">
                 <b-card-text><p>sit@gmail.com</p><p>clg.sit@gmail.com</p><p>sit.clg@gmail.com</p></b-card-text>
              </b-card>
           </b-col>
           <b-col>
              <b-card border-variant="primary" header="Visit Us" header-bg-variant="primary" 
                  header-text-variant="white" align="center">
                 <b-card-text>Address: Pulloor, Kariapatti TK <br>(NH 45B, Madurai, Tuticorin Highway),<br>Virudhunagar,
                     <br>Tamil Nadu <br> 626115</b-card-text>
              </b-card>
           </b-col>

         </b-row>
       </b-card-group>
     </b-container>
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
  name: "Contactus",
  components: {
     NavBar,
    Footer
  }
}
</script>