<template>
 <div>
     
     <div>
      <NavBar />
    </div>
     <div>
       <b-container><br>
         
         <h1>About Us</h1><br><br>
       </b-container>
     </div>
   
     
     <div>
       <b-container  class="bv-example-row">
         <b-card-group deck>
           <b-row>
             <b-col>
               <b-card title="Sports" img-src="card1.jpeg" img-alt="Image"   img-top >
                 <b-card-text>
                   This is a wider card with supporting text  as a natural lead-in to additional content.
                   This content is a little bit longer.
                 </b-card-text>
                 <template #footer>
                    <small class="text-muted">Last updated 2 mins ago</small>
                 </template>
               </b-card>
             </b-col>

             <b-col>
               <b-card title="Library" img-src="card2.jpeg" img-alt="Image" img-top>
                 <b-card-text>
                   This card has supporting text below as a natural lead-in to additional content.
                   This content is a little bit longer
                 </b-card-text>
                 <template #footer>
                   <small class="text-muted">Last updated 3 mins ago</small>
                 </template>
                </b-card>
            </b-col>

            <b-col>
              <b-card title="Eco-club" img-src="card3.jpg" img-alt="Image" img-top>
                <b-card-text>
                   This is a wider card with supporting text below as lead-in to additional content.
                   This card has even longer equal height action.
                </b-card-text>
                <template #footer>
                   <small class="text-muted">Last updated 2 mins ago</small>
                </template>
              </b-card>
            </b-col>
          </b-row>
       </b-card-group>
     </b-container>
   </div> <br><br>
   
   
   <div> 
       <Footer />
     </div>
   </div>
</template>



<script>
import NavBar from './Navbar'
import Footer from './Footer'
export default {
  name: "Aboutus",
  components: {
     NavBar,
    Footer
  }
}


</script>