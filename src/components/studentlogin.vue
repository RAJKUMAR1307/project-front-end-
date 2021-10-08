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
                 <b-button href="#" variant="primary"  v-b-modal.sr>Click here</b-button>
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
                   <b-button href="" variant="primary" v-b-modal.fdbs>Click here</b-button>
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
       
    <!--popup start for Send feedback--> 
    <div >
       <b-modal id="fdbs" title="Students Feedback" hide-footer>
          <b-form ref="form" >
            
            <b-form-group label="Name:">
                  <b-form-input  v-model="feeds.studentName" placeholder="Enter your name">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Feedback:">
                  <b-form-textarea cols="55" rows="6" v-model="feeds.feedback" placeholder="Enter your feedback (10 - 250 words)">
                  </b-form-textarea> 
            </b-form-group><br>
            
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="putFeedbacks()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" >Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Send feedback--> 
    
    <!--popup start for Send Request to college--> 
    <div >
       <b-modal id="sr" title="Student Request" hide-footer>
          <b-form ref="form" >
            
            <b-form-group label="Name:">
                  <b-form-input  v-model="send.studentName" placeholder="Enter your name">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Request:">
                  <b-form-textarea cols="45" rows="6" v-model="send.request" placeholder="Enter your Requests">
                  </b-form-textarea> 
            </b-form-group><br>
            
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="putRequest()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" >Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Send Request to college--> 
     
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
import RequestService from '../service/RequestService'
export default {
  name: "studentlogin",
  components: {
    NavBar,
    Footer
  },
  data(){
        return{
            feeds: { 
              studentName: "",           
              feedback: ""
            },
            send: {
              studentName: "",
              request: ""
            }, 
        }
    },
    mounted(){
     //   this.getAllfeedbacks();
    },
    methods:{
   
        putFeedbacks: function(){           
        return new Promise((resolve, reject) => {
            FeedbackService.putFeedbacks(this.feeds)
                .then(response => {
                alert ("feedback sent successfully!!!!!");
                    this.feeds.studentName="";
                    this.feeds.feedback="";
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },
    putRequest: function(){           
        return new Promise((resolve, reject) => {
            RequestService.putRequest(this.send)
                .then(response => {
                alert ("feedback sent successfully!!!!!");
                    this.send.studentName="";
                    this.send.request="";
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
