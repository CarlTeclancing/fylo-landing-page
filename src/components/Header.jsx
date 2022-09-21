import logo from '../assets/images/logo.svg'

export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt="logo" className='logo' />
            <nav>
                <a href="../app.js">Features</a>
                <a href="../app.js">Team</a>
                <a href="../app.js">Sign In</a>
            </nav>
        </div>
    )
}