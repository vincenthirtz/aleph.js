import { Head } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import './style/main.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Me.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

            </Head>
            {/* <ul>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/blog">My Blog</Link></li>
            </ul> */}
            <div id="page-wrapper">

                <section id="header">

                    <h1><a href="index.html">Dopetrope</a></h1>

                    <nav id="nav">
                        <ul>
                            <li className="current"><a href="index.html">Home</a></li>
                            <li>
                                <a href="#">Dropdown</a>
                                <ul>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Magna phasellus</a></li>
                                    <li><a href="#">Etiam dolore nisl</a></li>
                                    <li>
                                        <a href="#">Phasellus consequat</a>
                                        <ul>
                                            <li><a href="#">Magna phasellus</a></li>
                                            <li><a href="#">Etiam dolore nisl</a></li>
                                            <li><a href="#">Veroeros feugiat</a></li>
                                            <li><a href="#">Nisl sed aliquam</a></li>
                                            <li><a href="#">Dolore adipiscing</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Veroeros feugiat</a></li>
                                </ul>
                            </li>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="no-sidebar.html">No Sidebar</a></li>
                        </ul>
                    </nav>

                    <section id="banner">
                        <header>
                            <h2>Howdy. This is Dopetrope.</h2>
                            <p>A responsive template by HTML5 UP</p>
                        </header>
                    </section>

                    <section id="intro" className="container">
                        <div className="row">
                            <div className="col-4 col-12-medium">
                                <section className="first">
                                    <i className="icon solid featured fa-cog"></i>
                                    <header>
                                        <h2>Ipsum consequat</h2>
                                    </header>
                                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section className="middle">
                                    <i className="icon solid featured alt fa-bolt"></i>
                                    <header>
                                        <h2>Magna etiam dolor</h2>
                                    </header>
                                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section className="last">
                                    <i className="icon solid featured alt2 fa-star"></i>
                                    <header>
                                        <h2>Tempus adipiscing</h2>
                                    </header>
                                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                </section>
                            </div>
                        </div>
                        <footer>
                            <ul className="actions">
                                <li><a href="#" className="button large">Get Started</a></li>
                                <li><a href="#" className="button alt large">Learn More</a></li>
                            </ul>
                        </footer>
                    </section>

                </section>

                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <section>
                                    <header className="major">
                                        <h2>My Portfolio</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured">   <img src="/logo.svg" title="Aleph.js" /></a>
                                                <header>
                                                    <h3>Ipsum feugiat et dolor</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="./pic03.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Sed etiam lorem nulla</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="./pic04.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Consequat et tempus</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="./pic05.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Blandit sed adipiscing</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="./pic06.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Etiam nisl consequat</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="./pic07.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Dolore nisl feugiat</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                    </div>
                                </section>

                            </div>
                            <div className="col-12">

                                <section>
                                    <header className="major">
                                        <h2>The Blog</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="./pic08.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Magna tempus consequat</h3>
                                                    <p>Posted 45 minutes ago</p>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                        <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="./pic09.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Aptent veroeros aliquam</h3>
                                                    <p>Posted 45 minutes ago</p>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                        <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 col-12-medium">
                                <section>
                                    <header>
                                        <h2>Blandit nisl adipiscing</h2>
                                    </header>
                                    <ul className="dates">
                                        <li>
                                            <span className="date">Jan <strong>27</strong></span>
                                            <h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
                                            <p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.</p>
                                        </li>
                                        <li>
                                            <span className="date">Jan <strong>23</strong></span>
                                            <h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
                                            <p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>
                                        </li>
                                        <li>
                                            <span className="date">Jan <strong>15</strong></span>
                                            <h3><a href="#">Magna tempus lorem feugiat</a></h3>
                                            <p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.</p>
                                        </li>
                                        <li>
                                            <span className="date">Jan <strong>12</strong></span>
                                            <h3><a href="#">Dolore tempus ipsum feugiat nulla</a></h3>
                                            <p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.</p>
                                        </li>
                                        <li>
                                            <span className="date">Jan <strong>10</strong></span>
                                            <h3><a href="#">Blandit tempus aliquam?</a></h3>
                                            <p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.</p>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                    <header>
                                        <h2>What's this all about?</h2>
                                    </header>
                                    <a href="#" className="image featured"><img src="./pic10.jpg" alt="" /></a>
                                    <p>
                                        This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by
										<a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a> It's released for free under
										the <a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for any personal or commercial project &ndash; just don't forget to credit us!
									</p>
                                    <footer>
                                        <ul className="actions">
                                            <li><a href="#" className="button">Find out more</a></li>
                                        </ul>
                                    </footer>
                                </section>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <section>
                                    <header>
                                        <h2>Tempus consequat</h2>
                                    </header>
                                    <ul className="divided">
                                        <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
                                        <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
                                        <li><a href="#">Adipiscing feugiat phasellus sed tempus</a></li>
                                        <li><a href="#">Hendrerit tortor vitae mattis tempor sapien</a></li>
                                        <li><a href="#">Sem feugiat sapien id suscipit magna felis nec</a></li>
                                        <li><a href="#">Elit className aptent taciti sociosqu ad litora</a></li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <section>
                                    <header>
                                        <h2>Ipsum et phasellus</h2>
                                    </header>
                                    <ul className="divided">
                                        <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
                                        <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
                                        <li><a href="#">Adipiscing feugiat phasellus sed tempus</a></li>
                                        <li><a href="#">Hendrerit tortor vitae mattis tempor sapien</a></li>
                                        <li><a href="#">Sem feugiat sapien id suscipit magna felis nec</a></li>
                                        <li><a href="#">Elit className aptent taciti sociosqu ad litora</a></li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                    <header>
                                        <h2>Vitae tempor lorem</h2>
                                    </header>
                                    <ul className="social">
                                        <li><a className="icon brands fa-facebook-f" href="#"><span className="label">Facebook</span></a></li>
                                        <li><a className="icon brands fa-twitter" href="#"><span className="label">Twitter</span></a></li>
                                        <li><a className="icon brands fa-dribbble" href="#"><span className="label">Dribbble</span></a></li>
                                        <li><a className="icon brands fa-tumblr" href="#"><span className="label">Tumblr</span></a></li>
                                        <li><a className="icon brands fa-linkedin-in" href="#"><span className="label">LinkedIn</span></a></li>
                                    </ul>
                                    <ul className="contact">
                                        <li>
                                            <h3>Address</h3>
                                            <p>
                                                Untitled Incorporated<br />
												1234 Somewhere Road Suite<br />
												Nashville, TN 00000-0000
											</p>
                                        </li>
                                        <li>
                                            <h3>Mail</h3>
                                            <p><a href="#">someone@untitled.tld</a></p>
                                        </li>
                                        <li>
                                            <h3>Phone</h3>
                                            <p>(800) 000-0000</p>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-12">

                                <div id="copyright">
                                    <ul className="links">
                                        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>

    )
}
