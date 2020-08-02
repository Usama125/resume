import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div class="resume">
   <div class="resume_left">
     <div class="resume_profile">
       <img src={require("./Usama.jpg")} alt="profile_pic" />
     </div>
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">Usama Farooq</p>
           <p class="regular">Full Stack JavaScript Developer</p>
         </div>
         <ul>
           <li>
             <div class="icon">
               <i class="fas fa-map-signs"></i>
             </div>
             <div class="data">
               Johar Town <br /> Lahore
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-mobile-alt"></i>
             </div>
             <div class="data">
               +92 315 7721671
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-envelope"></i>
             </div>
             <div class="data">
               usamafarooq2007@gmail
             </div>
           </li>
         </ul>
       </div>
       <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">skill's</p>
         </div>
         <ul>
           <li>
             <div class="skill_name">
               React Js
             </div>
             <div class="skill_progress">
               <span style={{width: '90%'}}></span>
             </div>
             <div class="skill_per">90%</div>
           </li>
           <li>
             <div class="skill_name">
               Node JS
             </div>
             <div class="skill_progress">
               <span style={{width: '80%'}}></span>
             </div>
             <div class="skill_per">80%</div>
           </li>
           <li>
             <div class="skill_name">
               Micro Services
             </div>
             <div class="skill_progress">
               <span style={{width: '70%'}}></span>
             </div>
             <div class="skill_per">70%</div>
           </li>
           <li>
             <div class="skill_name">
               React Native
             </div>
             <div class="skill_progress">
               <span style={{width: '65%'}}></span>
             </div>
             <div class="skill_per">65%</div>
           </li>
           <li>
             <div class="skill_name">
               CSS
             </div>
             <div class="skill_progress">
               <span style={{width: '88%'}}></span>
             </div>
             <div class="skill_per">88%</div>
           </li>
         </ul>
       </div>
     </div>
  </div>
  <div class="resume_right">
    <div class="resume_item resume_about">
        <div class="title">
           <p class="bold">About us</p>
         </div>
        <p>I am a passionate web application and serves as a Full Stack JavaScript Engineer @Nextbridge in Lahore Pakistan. I have approximately 2 and a half years of web development experience in 4 major software companies in Pakistan and now want to represent myself on the next level. I have worked in major PHP frameworks like Laravel, CodeIgniter and Yii 2 as well as has strong JavaScript background with Vanilla JavaScript, JQuery, AJAX along with hands-on experience in front end frameworks like React.js, Vue.js and Node.js ( Express.js ) with microservices architecture as serverside JavaScript technology and hands-on experience with React Native. I would be very happy to represent any of the multinational company weather its within the borders or across the borders.</p>
        <br/>
        <div class="title">
           <p class="bold">Website</p>
         </div>
         <p>I would highly recommend visit my site to see my work and experience in more depth</p>
         <a href="https://5f269192b915070007222dc7--relaxed-volhard-611221.netlify.app/" target="_blank">Usama Farooq</a>
    </div>
    <div class="resume_item resume_work">
        <div class="title">
           <p class="bold">Work Experience</p>
         </div>
        <ul>
            <li>
              <div class="date">2019 - Present</div>
              <div class="info">
                    <p class="semi-bold">Nextbridge</p> 
                  <p>Working as a Full Stack JavaScript | React JS | Node JS | Microservices Developer</p>
                </div>
            </li>
            <li>
              <div class="date">2018 - 2019</div>
              <div class="info">
                     <p class="semi-bold">Lead Concept</p> 
                  <p>Worked as JavaScript | React JS | AWS Serverless Developer. Completed two awesome products named as Digital Times and Digital Forms</p>
                </div>
            </li>  
            <li>
                <div class="date">2017 - 2018</div> 
                <div class="info">
                     <p class="semi-bold">RM Systems Origami</p> 
                  <p>Worked as a PHP | JavaScript Developer, started as internee and ends up leading the team.</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="resume_item resume_education">
      <div class="title">
           <p class="bold">Education & Cirtifications</p>
         </div>
      <ul>
            <li>
                <div class="date">2014 - 2018</div> 
                <div class="info">
                     <p class="semi-bold">University Of Surgodha</p> 
                  <p>BS Software Engineer - 3.2</p>
                </div>
            </li>
            <li>
              <div class="date">2020 - present</div>
              <div class="info">
                     <p class="semi-bold">Udemy</p> 
                  <p>Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes</p>
                </div>
            </li>
            <li>
              <div class="date">2020 - present</div>
              <div class="info">
                     <p class="semi-bold">Udemy</p> 
                  <p>Build Full-Stack Apps with GraphQL, Prisma, Node and React</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="resume_item resume_hobby">
      <div class="title">
           <p class="bold">Hobby</p>
         </div>
       <ul>
         <li><i class="fas fa-book"></i></li>
         <li><i class="fas fa-gamepad"></i></li>
         <li><i class="fas fa-music"></i></li>
         <li><i class="fab fa-pagelines"></i></li>
      </ul>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
