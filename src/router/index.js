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
                component: adminLogin
        }, 
        {
                path: '/adminlogin/Approveinstitute',
                name: 'Approveinstitute',
                component: ApproveInstitute
        }, 
        {
                path: '/adminlogin/deleteins',
                name: 'deleteins',
                component: deleteIns
        }, 
        {
                path: '/adminlogin/Viewstudents',
                name: 'Viewstudents',
                component: ViewStudents
        }, 
        {
                path: '/collegelogin',
                name: 'collegelogin',
                component: collegeLogin
        }, 
        {
                path: '/collegelogin/uploadarticles',
                name: 'uploadarticles',
                component: uploadArticles
        }, 
        {
                path: '/collegelogin/facultymanagement',
                name: 'facultymanagement',
                component: facultyManagement
        }, 
        {
                path: '/studentlogin',
                name: 'studentlogin',
                component: studentLogin
        }, 
        
               
];
const router = new VueRouter({
    routes,
    mode: 'history',
});
export default router;
