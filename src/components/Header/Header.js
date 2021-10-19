import "../Header/Header.css"
import "../../App.css"
import {Main} from '../Main Page/MainPage'
import Logo from '../../assest/NameLogo.svg'
import Elipse from '../../assest/Elipse 3.svg'

export const Header = () =>{
    return (
        <div>
           <header className="header">  
           <img src={Elipse} alt="decoration" className="elipse" />
                <ul className="header-items">
                    <li>PROYECTOS</li>
                    <li>SKILLS</li>
                    <img src={Logo} alt="logo"/>    
                    <li>PROYECTOS</li>
                    <li>PROYECTOS</li>
                </ul>
                <Main/>
            </header>
            <section className="header2"/> 
        </div>
        
    ) 
}
