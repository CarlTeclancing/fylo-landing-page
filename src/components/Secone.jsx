import illustrationOne from '../assets/images/illustration-1.svg'

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
                        <input type="email" required />
                        <input type="button" value="Get Started" id="btn" />
                    </form>
                </aside>

                <section>
                    <img src={illustrationOne} alt="" />
                </section>
            </main>
        </div>
    )
}