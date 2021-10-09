import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import AboutUs from '../components/Aboutus'
import ContactUs from '../components/Contactus'
import adminLogin from '../components/adminlogin'
import ApproveInstitute from '../components/Approveinstitute'
import deleteIns from '../components/deleteins'
import ViewStudents from '../components/Viewstudents'
import collegeLogin from '../components/collegelogin'
import uploadArticles from '../components/uploadarticles'
import facultyManagement from '../components/facultymanagement'
import studentLogin from '../components/studentlogin'

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
        {
                path: '/adminlogin',
                name: 'adminlogin',
                component: adminLogin,
                meta:{
          requiresAuth:true
                 }  
        }, 
        {
                path: '/adminlogin/Approveinstitute',
                name: 'Approveinstitute',
                component: ApproveInstitute,
                meta:{
                requiresAuth:true
                }  
        }, 
        {
                path: '/adminlogin/deleteins',
                name: 'deleteins',
                component: deleteIns,
                meta:{
                requiresAuth:true
                } 
        }, 
        {
                path: '/adminlogin/Viewstudents',
                name: 'Viewstudents',
                component: ViewStudents,
                meta:{
                requiresAuth:true
                 } 
        }, 
        {
                path: '/collegelogin',
                name: 'collegelogin',
                component: collegeLogin,
                meta:{
                requiresAuth:true
                }   
        }, 
        {
                path: '/collegelogin/uploadarticles',
                name: 'uploadarticles',
                component: uploadArticles,
                meta:{
                requiresAuth:true
                } 
        }, 
        {
                path: '/collegelogin/facultymanagement',
                name: 'facultymanagement',
                component: facultyManagement,
                meta:{
                requiresAuth:true
                } 
        }, 
        {
                path: '/studentlogin',
                name: 'studentlogin',
                component: studentLogin,
                meta:{
                requiresAuth:true
                } 
        }, 
        
               
];
const router = new VueRouter({
    routes,
    mode: 'history',
});
     router.beforeEach((to,from,next)=>{
        if(to.meta.requiresAuth){
                if(localStorage.getItem('status')=='verified')
                {
                       next();
                }
                else{
                        router.push({name:'Home'})
                }
        }
        else{
                next();
        }
})
export default router;
