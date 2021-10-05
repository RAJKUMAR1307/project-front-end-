<template>
  <div class="adminlogin">
     <div>    
       <NavBar />
     </div>
     
     <div>
     <b-container>
        <h1>ADMIN LOGIN</h1>
      </b-container>
     </div>
     
     
     <div>
      <b-container>
        <b-row>
          <b-col>
            <div>
             <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="card3.jpeg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                 <b-card-body title="Approve Institute">
                   <b-card-text>
                     This is a wider card with supporting text as a natural lead-in to additional content.
                     This content is a little bit longer.
                   </b-card-text>
                   <b-button href="adminlogin/Approveinstitute" variant="primary">Click here</b-button>
                 </b-card-body>
                </b-col>
              </b-row>
             </b-card>
            </div>
          </b-col>
            
          <b-col>
            <div>
             <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                 <b-card-body title="Delete Institute">
                   <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                   </b-card-text>
                   <b-button href="adminlogin/deleteins" variant="primary">Click here</b-button>
                 </b-card-body>
                </b-col>
                <b-col md="6">
                   <b-card-img src="card4.jpg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
              </b-row>
             </b-card>
            </div>
          </b-col>
        </b-row><br>
     
        <b-row>
          <b-col>
           <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="card5.jpeg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="View students">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                    <b-button href="adminlogin/Viewstudents" variant="primary">Click here</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
           </div>
          </b-col>
     
          <b-col>
           <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
             <b-row no-gutters>
              <b-col md="6">
               <b-card-body title="View complaints">
                 <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                 </b-card-text>
                 <b-button href="#" variant="primary"  v-b-modal.modal-4>Click here</b-button>
               </b-card-body>
              </b-col>
              <b-col md="6">
                <b-card-img src="card6.jpg" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
             </b-row>
            </b-card>
           </div>
          </b-col>
        </b-row>
      </b-container>
     </div><br>
     
     <div class="text-center">
                <b-button href="/" type="button" variant="outline-danger " class="mx-5">Logout</b-button>
     </div><br>
     
     
     <!--popup start for View complaints--> 
    <div >
       <b-modal id="modal-4" title="View complaints" hide-footer>
          <b-form ref="form"><br>
               <p><i>no complaints to display</i></p>
            <br>
            <div class="text-center">
              <b-button href="adminlogin" type="button" variant="outline-danger">Close</b-button>
            </div>
          </b-form>
       </b-modal>
    </div>
    <!--popup end for View complaints--> 
     
     <div>  
       <Footer />
     </div>
       
  </div>
</template>


<script>

import NavBar from './Navbar'
import Footer from './Footer'
export default {
  name: 'adminlogin',
  components:{
        NavBar,
        Footer
  },
  }
</script>
