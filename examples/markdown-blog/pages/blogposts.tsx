import { Link } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import './style/main.css'

export default function BlogPosts() {

    return (<div className="row">
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
                        <li><a href="#" className="button icon solid fa-file-alt">Voir</a></li>
                        <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                        <Link to="./post/bla-bla-bla">Test</Link>

                    </ul>
                </footer>
            </section>
        </div>
    </div>)
}