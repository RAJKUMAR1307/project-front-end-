import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import AboutUs from '../components/Aboutus'
import ContactUs from '../components/Contactus'


Vue.use(VueRouter)
const routes = [   
      {
                path: '/',
                name: 'Home',
                component: Home
        },   
        {
                path: '/Aboutus',
                name: 'Aboutus',
                component: AboutUs
        }, 
        {
                path: '/Contactus',
                name: 'Contactus',
                component: ContactUs
        }, 
        
               
];
const router = new VueRouter({
    routes,
    mode: 'history',
});
export default router;
