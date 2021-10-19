import Facebook from "../../assest/Icon awesome-facebook.svg"
import Pinterest from "../../assest/Icon awesome-pinterest.svg"
import Instagram from "../../assest/Icon awesome-instagram.svg"

export const Footer =()=>{
    return(
        <div className="footer">
            <h2>@Lorem ipsum dolor</h2>
            <div className="socialMedia">
               <img src={Facebook} alt="fb-logo" />            
                <img src={Pinterest} alt="fb-logo" />            
                <img src={Instagram} alt="fb-logo" />   
            </div>        
        </div>
    )
}