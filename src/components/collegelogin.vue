<template>
  <div>
  
     <div>    
       <NavBar />
     </div>
     
     <div>
     <b-container>
        <h1>COLLEGE LOGIN</h1>
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
                  <b-card-img src="art.jpg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                 <b-card-body title="Upload articles">
                   <b-card-text>
                     This is a wider card with supporting text as a natural lead-in to additional content.
                    
                   </b-card-text>
                   <b-button href="collegelogin/uploadarticles" variant="primary">Click here</b-button>
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
                 <b-card-body title="Faculty Management">
                   <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                
                   </b-card-text>
                   <b-button href="collegelogin/facultymanagement" variant="primary">Click here</b-button>
                 </b-card-body>
                </b-col>
                <b-col md="6">
                   <b-card-img src="fm.jpg" alt="Image" class="rounded-0"></b-card-img>
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
                  <b-card-img src="up.jpeg" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Update Profile">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                   
                    </b-card-text>
                    <b-button variant="primary" >Click here</b-button>
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
               <b-card-body title="Send response">
                 <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    
                 </b-card-text>
                 <b-button href="#" variant="primary" > Click here</b-button>
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
                 <b-card-body title="View student Requests">
                   <b-card-text>
                     This is a wider card with  lead-in to additional content.
       
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
                   <b-button href="" variant="primary" v-b-modal.fdb>Click here</b-button>
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
        
            <div class="text-center">
                <b-button href="/" type="button" variant="outline-danger " class="mx-5">Logout</b-button>
            </div><br>
            
            <!--popup start for Send feedback--> 
    <div >
       <b-modal id="fdb" title="Send feedback" hide-footer>
          <b-form ref="form" >
            
            <b-form-group label="College:">
                  <b-form-input  v-model="feed.college" placeholder="Enter your college">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Feedback:">
                  <b-form-textarea cols="55" rows="6" v-model="feed.feedback" placeholder="Enter your feedback (10 - 250 words)">
                  </b-form-textarea> 
            </b-form-group><br>
            
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="putFeedback()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" >Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Send feedback--> 
    
        
        
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
import FeedbackService from '../service/FeedbackService'
export default {
  name: 'collegelogin',
  components:{
        NavBar,
        Footer
  },
  data(){
        return{
            feed: { 
              college: "",           
              feedback: ""
            },
        }
    },
    mounted(){
     //   this.getAllfeedbacks();
    },
   methods:{
   
        putFeedback: function(){           
        return new Promise((resolve, reject) => {
            FeedbackService.putFeedback(this.feed)
                .then(response => {
                alert ("feedback sent successfully!!!!!");
                    this.feed.college="";
                    this.feed.feedback="";
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    }          
    }   
 }       
</script>
