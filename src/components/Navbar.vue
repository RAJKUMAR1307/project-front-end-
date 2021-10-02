<template>
  <div>
  <b-container>
    <!--navbar starts-->
    <div> 
      <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">    
        <b-container>
          <div>
            <b-img left src="https://upload.wikimedia.org/wikipedia/en/b/b0/Sethu_Institute_of_Technology_Logo.png" height="40" width="40"></b-img>
          </div>
          <b-navbar-brand>SIT</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav  class="ms-auto">
                  <b-nav-item href="/">Home</b-nav-item>
                  <b-nav-item href="#" v-b-modal.modal-1>Login</b-nav-item>
                  <b-nav-item-dropdown text="Registration">
                     <b-dropdown-item href="#" v-b-modal.modal-2>College Register</b-dropdown-item>
                     <b-dropdown-item href="#" v-b-modal.modal-3>Student Register</b-dropdown-item> 
                  </b-nav-item-dropdown>    
                  <b-nav-item href="Aboutus">About Us</b-nav-item>
                  <b-nav-item href="Contactus">Contact Us</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <!--navbar starts-->
    
    
    <!--Heading starts-->
    <div>
      <b-container><br><br><br>
        <img alt="sit logo" src="https://upload.wikimedia.org/wikipedia/en/b/b0/Sethu_Institute_of_Technology_Logo.png" height="100" width="100">
        <h1>Sethu Institute Of Technology</h1>
        <h6>(An autonomous institution)</h6>
      </b-container>
    </div><br><br>
    <!--Heading ends-->
     
     <div>
      <popupLogin />
    </div>
    
    
    
    
    <div>
      <popupClg />
    </div>
     

    <div >
      <popupStu />
    </div>
  
   </b-container>   
 </div>
</template>




<script>
 
import popupClg from './popupclg.vue'
import popupStu from './popupstu.vue'
import popupLogin from './popuplogin.vue'
export default {
  name: "Navbar",
  components: {
    popupClg,
    popupStu,
    popupLogin
  }
} 

</script>


<style>

h1 {
  font-family: "Lucida Console", "Courier New", monospace;
  text-shadow: 2px 5px 1px  #ababab;
}




</style > 