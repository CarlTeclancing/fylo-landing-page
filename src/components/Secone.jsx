import illustrationOne from '../assets/images/illustration-1.svg'
import illustrationtwo from '../assets/images/illustration-2.svg'
import icon from '../assets/images/icon-arrow.svg'
import quotes from '../assets/images/icon-quotes.svg'
import profilepic from '../assets/images/avatar-testimonial.jpg'

export default function Secone(){
    return(
        <div className="secone">
            <main>
                <aside>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores your most iimportant files in one secure location. Access them wherever
                        you need, shear and collaborate with friends, family, and co-workers.
                    </p>
                    <form action="">
                        <input type="email" placeholder='Enter Your Email' required />
                        <input type="submit" value="Get Started" id="btn" />
                    </form>
                </aside>

                <section>
                    <img className='img-1' src={illustrationOne} alt="" />
                </section>
            </main>

        <div className="secone">
        <main>
                <aside>
                    <h1>stay productive, wherever you are.</h1>
                    <p>Never let location be an issue when accesig your file. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely shear files and folders with friends, family and collleagues for live collaboration. No email attachments required!</p>
                    <a className='a' href="../app.jsx">See how Fylo works <img src={icon} alt="" /> </a>
                    <div className="testimonial">
                        <img src={quotes} alt="" />
                        <p>Fylo has improved our team productivity by an order of magnitude. Since maiking 
                            the switch our team has become a well-oiled collaboration mechine
                        </p>
                        <div className="user">
                            <img src={profilepic} className="img-3" alt="" />
                            <h4>Kyle Burton <br/> <span>Founder and CEO Hddie</span></h4>
                        </div>
                    </div>
                </aside>
                <section>
                    <img src={illustrationtwo} className='img-1' alt="" />
                </section>
            </main>
        </div>
           
        </div>
    )
}