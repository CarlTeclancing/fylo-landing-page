import logo from '../assets/images/logo.svg'
import phone from '../assets/images/icon-phone.svg'
import email from '../assets/images/icon-email.svg'




export default function Footer(){
    return(
        <div className="footer">
            <div className="same">
                <img  src={logo} alt="" className='logo wh' />
                <img className="wh" src={phone} alt="" />
                <img className="wh" src={email} alt="" />
            </div>
            <div className="same"></div>
            <div className="same"></div>
        </div>
    )
}