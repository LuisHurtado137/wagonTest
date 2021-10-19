import "../../components/Skills/Skills.css"
import "../../App.css"
import tools from "../../assest/Icon simple-css3.svg"
import html from "../..//assest/Icon awesome-html5.svg"
import skillsImage from "../../assest/skillsImage.jpg"

export const Skills = () => {
    return(
        <div className="skillsPage" >
            <h1 className="titles skill-title">SKILLS</h1>
            <div className="skillContainer" >
                <img className="skill-image" src={skillsImage} alt="skill" />
                <div className="skillInfo" >
                    <div className="skillCard" >
                        <img src={tools} alt="css" />
                        <div className="skillText">
                            <h2>Lorem ipsum dolor</h2>
                            <p>consectetur adipiscing elit. Phasellus porta neque at tortor volutpat, vitae ullamcorper sapien eleifend. Fusce eu erat iaculis, gravida ex at, tempor ante. Praesent feugiat, magna eget varius placerat, quam enim ultrices urna, sed facilisis nibh sem ac felis. In quis consequat</p>
                        </div>
                    </div>
                    <div className="skillCard" >
                        <img src={html} alt="html" />
                        <div className="skillText" >
                            <h2>Lorem ipsum dolor</h2>
                            <p>consectetur adipiscing elit. Phasellus porta neque at tortor volutpat, vitae ullamcorper sapien eleifend. Fusce eu erat iaculis, gravida ex at, tempor ante. Praesent feugiat, magna eget varius placerat, quam enim ultrices urna, sed facilisis nibh sem ac felis. In quis consequat</p>
                        </div>
                    </div>
                    <div className="skillCard">
                        <img src={html} alt="html2" />
                        <div className="skillText">
                            <h2>Lorem ipsum dolor</h2>
                            <p>consectetur adipiscing elit. Phasellus porta neque at tortor volutpat, vitae ullamcorper sapien eleifend. Fusce eu erat iaculis, gravida ex at, tempor ante. Praesent feugiat, magna eget varius placerat, quam enim ultrices urna, sed facilisis nibh sem ac felis. In quis consequat</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}