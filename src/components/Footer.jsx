import logo from '../assets/images/logo.svg'
import phone from '../assets/images/icon-phone.svg'
import email from '../assets/images/icon-email.svg'




export default function Footer(){
    return(
        <div className="footer">
            <div className="same">
                <img  src={logo} alt="" className='logo wh' />
                <div className="w-1"><img className="wh" src={phone} alt="" /> <span>Phone: 222 222 222</span></div>
                <div className="w-1"><img className="wh" src={email} alt="" /> <span>Example@fylo.com</span></div>
                <div className="w-1"></div>
                
                
            </div>
            <div className="same"></div>
            <div className="same"></div>
        </div>
    )
}