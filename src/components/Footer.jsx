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

            </div>
            <div className="same">
                
                    <a href="../app.js">About</a>
                    <a href="../app.js">Terms</a>
                    <a href="../app.js">Checks</a>
                
            </div>
            
                 <div className='same'>
                    <a href="../app.js">About</a>
                    <a href="../app.js">Terms</a>
                    <a href="../app.js">Checks</a>
                
            </div>
        </div>
    )
}