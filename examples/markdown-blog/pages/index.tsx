import React from 'https://esm.sh/react';
import BlogPosts from './blogposts.tsx';
import Header from './header.tsx';
import Menu from './menu.tsx';
import Portfolio from './portfolio.tsx';
import Footer from './footer.tsx';
import './style/main.css';

export default function Home() {
    return (
        <>
            <Header title="Accueil" />
            <div id="page-wrapper">
                <section id="header">
                    <Menu />
                    <section id="banner">
                        <header>
                            <h2>Howdy. This is Dopetrope.</h2>
                            <p>A responsive template by HTML5 UP</p>
                        </header>
                    </section>
                </section>

                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <section>
                                    <header className="major">
                                        <h2>Portfolio</h2>
                                    </header>
                                    <Portfolio />
                                </section>

                            </div>
                            <div className="col-12">
                                <section>
                                    <header className="major">
                                        <h2>Blog</h2>
                                    </header>
                                    <BlogPosts />
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>

            </div>

        </>

    )
}
