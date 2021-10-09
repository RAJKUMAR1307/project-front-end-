<template>
   <div class="Home">
    
    <div>
      <NavBar />
    </div>
     
     
     <!-- Home page and picture-->
     <div>
       <b-container>
         <ul>
            <li>Sethu Institute of Technology was started in 1995 by the Sethu Educational Trust, sponsored by a 
                committee of academicians led by educationist Thiru. S.Mohamed Jaleel. The college is approved by 
                the All India Council for Technical Education, New Delhi, Accreditation by National Board of
                Accreditation, New Delhi and is affiliated to Anna University, Chennai.</li> <br>
            <li>It offers Bachelors programmes in eight disciplines and seven Masters programme. The college is 
                 awarded autonomous status in the year 2012 by AICTE and it was confirmed by Anna University, 
                 Chennai in 2014.College bus fees per annum is like 25k to 35k which is a bit expensive. Though 
                 considering around a 40 km distance from madurai city, it's considerable ...</li><br><br>
         </ul>
       </b-container>
     </div>
      
     <div class="clearfix">
       <b-container>
          <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" no-animation
            indicators img-width="1024" img-height="480">


            <b-carousel-slide img-src="clg1.jpg">
            </b-carousel-slide>
   
            <b-carousel-slide img-src="clg2.jpg"> 
            </b-carousel-slide>
    
            <b-carousel-slide img-src="clg3.jpg">
            </b-carousel-slide>
           </b-carousel>
       </b-container>
     </div>
     
     <div>
        <b-container><br><br>
           <ul>
              <li>
                 Sethu Institute of Technology was started in 1995 by the Sethu Educational Trust, sponsored by 
                 a committee of academicians led by educationist Thiru. S.Mohamed Jaleel. The college is approved 
                 by the All India Council for Technical Education, New Delhi, Accreditation by National Board of 
                 Accreditation, New Delhi and is affiliated to Anna University, Chennai.</li><br>
              <li>
                 It offers Bachelors programmes in eight disciplines and seven Masters programme. The college is 
                 awarded autonomous status in the year 2012 by AICTE and it was confirmed by Anna University, 
                 Chennai in 2014.College bus fees per annum is like 25k to 35k which is a bit expensive. Though 
                 considering around a 40 km distance from madurai city, it's considerable 
              </li>
           </ul><br>
        </b-container>
     </div>
     
     <div>
       <AboutUs />
     </div>
   
     <div>
       <ContactUs />
     </div>
   
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
