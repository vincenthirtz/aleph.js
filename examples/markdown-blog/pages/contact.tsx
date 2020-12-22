import { useForm } from 'https://cdn.esm.sh/v11/react-hook-form?no-check';
import React from 'https://esm.sh/react';
import Footer from './footer.tsx';
import Header from './header.tsx';
import Link from './link.tsx';
import Menu from './menu.tsx';
import './style/main.css';

export default function Contact() {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>

            <Header title='Contact' />
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
                                        <h3>Contact</h3>
                                        <p>Me contacter</p>
                                    </header>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input name="firstname" ref={register} /> {/* register an input */}
                                        <input name="lastname" ref={register({ required: true })} />
                                        {errors.lastname && 'Last name is required.'}
                                        <input name="age" ref={register({ pattern: /\d+/ })} />
                                        {errors.age && 'Please enter number for age.'}
                                        <input type="submit" />
                                    </form>
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