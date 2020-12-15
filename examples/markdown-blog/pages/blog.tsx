import React from 'https://esm.sh/react';
import BlogPosts from './blogposts.tsx';
import Footer from './footer.tsx';
import Header from './header.tsx';
import Menu from './menu.tsx';
import './style/main.css';

export default function Blog() {
    return (
        <>
            <Header title="Blog" />
            <div id="page-wrapper">
                <section id="header">
                    <Menu />
                </section>

                <section id="main">
                    <div className="container">
                        <div className="row">

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

                <Footer />
            </div>

        </>

    )
}
