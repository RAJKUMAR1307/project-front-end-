<template>
   <div>
   
       <div>    
         <NavBar />
       </div>
       
       
       <div>
     <b-container>
        <h1>STUDENT LOGIN</h1>
      </b-container>
     </div>
     
     
     <div>
      <b-container>
       
        <b-row>
          <b-col>
           <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;" bg-variant="dark" text-variant="light">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="up.jpeg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Update Profile">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                   
                    </b-card-text>
                    <b-button href="" variant="primary">Click here</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
           </div>
          </b-col>
     
          <b-col>
           <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;" bg-variant="dark" text-variant="light">
             <b-row no-gutters>
              <b-col md="6">
               <b-card-body title="Send Request to college">
                 <b-card-text>
                    This is a wider card with natural lead-in to additional content.
                    
                 </b-card-text>
                 <b-button href="#" variant="primary"  v-b-modal.modal-4>Click here</b-button>
               </b-card-body>
              </b-col>
              <b-col md="6">
                <b-card-img src="st.jpg" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
             </b-row>
            </b-card>
           </div>
          </b-col>
        </b-row><br>
        
        <b-row>
          <b-col>
            <div>
             <b-card no-body class="overflow-hidden" style="max-width: 540px;" bg-variant="dark" text-variant="light">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="vsr.jpg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                 <b-card-body title="View Response">
                   <b-card-text>
                     This is a wider card with supporting text as a natural lead-in to additional content.
       
                   </b-card-text>
                   <b-button href="" variant="primary">Click here</b-button>
                 </b-card-body>
                </b-col>
              </b-row>
             </b-card>
            </div>
          </b-col>
            
          <b-col>
            <div>
             <b-card no-body class="overflow-hidden" style="max-width: 540px;" bg-variant="dark" text-variant="light">
              <b-row no-gutters>
                <b-col md="6">
                 <b-card-body title="Send feedback">
                   <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                     
                   </b-card-text>
                   <b-button href="" variant="primary">Click here</b-button>
                 </b-card-body>
                </b-col>
                <b-col md="6">
                   <b-card-img src="fb.png" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
              </b-row>
             </b-card>
            </div>
          </b-col>
        </b-row><br>
        
        <b-card bg-variant="dark" text-variant="white" title="Download articles">
       <b-card-text>
         <b-card-img src="art.jpg" alt="Image" class="rounded-0" width="120" height="200"></b-card-img>
          With supporting text below as a natural lead-in to additional content.
      </b-card-text>
         <b-button href="#" variant="primary">Click here</b-button>
      </b-card><br>
     
      <div class="text-center">
                <b-button href="/" type="button" variant="outline-danger " class="mx-5">Logout</b-button>
       </div><br>
     
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
  name: "Home",
  components: {
    NavBar,
    Footer
  }
}


</script>
