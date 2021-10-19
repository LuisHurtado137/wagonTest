import "../Projects/Projects.css"

import elipse1 from "../../assest/Elipse 1.svg"
import elipse2 from "../../assest/Elipse 2.svg"
import project from  "../../assest/Imagen 2-1.png"

export const Projects = () => {
    return(
        <div className="projectsPage">
            <div className="decoration-container" >
               <img src={elipse1} className="elipse1" alt="decoration"/>
               <img src={elipse2} className="elipse2" alt="decoration"/> 
            </div>
            <div className="projects-container">
                <h2 className="titles project-text"> MY WORK</h2>
                <div className="projectCard-container">
                    <div className="projectCard" >
                        <img src={project} alt="projects"/>
                        <h2>LOREMP IPSUM</h2>
                        <p>READ MORE</p>
                    </div>
                    <div className="projectCard" >
                        <img src={project} alt="projects"/>
                        <h2>LOREMP IPSUM</h2>
                        <p>READ MORE</p>
                    </div>
                    <div className="projectCard" >
                        <img src={project} alt="projects"/>
                        
                        <h2>LOREMP IPSUM</h2>
                        <p>READ MORE</p>
                    </div>
                    <div className="projectCard" >
                        <img src={project} alt="projects"/>
                        <h2>LOREMP IPSUM</h2>
                        <p>READ MORE</p>
                    </div>
                    <div className="projectCard" >
                        <img src={project} alt="projects"/>
                        <h2>LOREMP IPSUM</h2>
                        <p>READ MORE</p>
                    </div>
                </div>  
            </div>      
        </div>
    )
}

// const slider = document.querySelector('.projectCard');
// let mouseDown = false;
// let startX, scrollLeft;

// let startDragging = function (e) {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// };
// let stopDragging = function (event) {
//   mouseDown = false;
// };

// slider.addEventListener('mousemove', (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// });

// // Add the event listeners
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);


// const slider = document.querySelector('.projectCard');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });