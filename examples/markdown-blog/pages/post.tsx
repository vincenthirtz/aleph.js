import React, { ComponentType } from 'https://esm.sh/react';
import Footer from './footer.tsx';
import Header from './header.tsx';
import Link from './link.tsx';
import Menu from './menu.tsx';
interface Metadata {
    title: string
    author: string
    date: string
}

export default function BlogPosts({ Page }: { Page: ComponentType & { meta: Metadata } }) {
    return (
        <>

            <Header title={Page?.meta?.title} />
            <div id="page-wrapper">
                <section id="header">
                    <Menu />
                </section>

                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <section className="box">
                                    <a href="#" className="image featured"><img src="/pic08.jpg" alt="" /></a>
                                    <header>
                                        <h3>{Page?.meta?.title}</h3>
                                        <p>Posted at {Page?.meta?.date} by {Page?.meta?.author}</p>
                                    </header>
                                    <Page />
                                    <footer>
                                        <ul className="actions">
                                            <Link replace to="blog"> <button className=" alt icon solid fa-comment"> Retour</button></Link>
                                            {/* <button className=" alt icon solid fa-comment"> 3 com</button> */}
                                        </ul>
                                    </footer>
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
