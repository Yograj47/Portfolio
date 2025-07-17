import { useEffect } from 'react';
 
 function Skill(){
     useEffect(() => {
         setTimeout(() => {
             document.querySelectorAll(".fill").forEach((bar, index) => {
                 const widths = ["90%", "80%", "40%"];
                 bar.style.width = widths[index];
             });
         }, 100);
     }, []);
     
     return(
         // <!-- Skills -->
         <div id="skills">
             <h1>Skills</h1>
             <ul className="tech">
                 <li>
                     <span>Html</span>
                     <div className="bar">
                         <div className="html fill"></div>
                     </div>
                 </li>
                 <li>
                     <span>Css</span>
                     <div className="bar">
                         <div className="css fill"></div>
                     </div>
                 </li>
                 <li>
                     <span>JavaScript</span>
                     <div className="bar">
                         <div className="js fill"></div>
                     </div>
                 </li>
             </ul>
         </div>
     )
 }
 
 export default Skill;