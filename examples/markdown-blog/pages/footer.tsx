import 'https://cdn.jsdelivr.net/npm/@ptkdev/webcomponent-instagram-widget@latest/dist/lib/en/instagram-widget.min.js';
import React from 'https://esm.sh/react';
import Icon from './icon.tsx';
import './style/main.css';

export default function Blog() {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-8 col-12-medium">
                        <section>
                            <header>
                                <h2>Mes photos</h2>
                            </header>
                            <instagram-widget username="@madebynormandy" items-limit="6" grid="3x3"></instagram-widget>
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
                                    <Icon name="twitter" link="https://twitter.com/alukaard76" />
                                    <Icon name="twitch" link="https://www.twitch.tv/alukaard76" />
                                    <Icon name="linkedin-in" link="https://www.linkedin.com/in/hirtzvincent/" />
                                    <Icon name="instagram" link="https://www.instagram.com/madebynormandy/" />
                                    <Icon name="spotify" link="https://open.spotify.com/user/cousyboy" />
                                    <Icon name="github" link="https://github.com/vincenthirtz" />
                                    <Icon name="discord" link="hhttps://discord.gg/b27CdDz8" />
                                    <Icon name="cc-paypal" link="https://www.paypal.com/paypalme/alurendlargent" />
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