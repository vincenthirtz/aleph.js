import React from 'https://esm.sh/react';
import './style/main.css';

export default function Blog() {
    return (
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
                                <h2>En savoir plus</h2>
                            </header>
                            <a href="#" className="image featured"><img src="/photo.jpeg" alt="" /></a>
                            <p>Front-end developer</p>
                            <footer>
                                <ul className="actions">
                                    <li><a href="#" className="button">Find out more</a></li>
                                </ul>
                            </footer>
                        </section>
                    </div>
                    <div className="col-12">

                        <div id="copyright">
                            <ul className="links">
                                <li>&copy; Vincent Hirtz, Tous droits réservés.</li><li>Design & develop with love</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>)
}