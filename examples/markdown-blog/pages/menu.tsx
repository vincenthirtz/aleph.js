import { NavLink, useRouter } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'

export default function Menu() {
    const r = useRouter()
    return (
        <nav id="nav">
            <ul>
                <li className={r.pathname === "/" ? "current" : ""}><NavLink to="/">Home</NavLink></li>
                <li className={r.pathname === "/blog" ? "current" : ""}>
                    <NavLink to="/blog">Blog</NavLink>

                </li>
                <li className={r.pathname === "/about" ? "current" : ""}><NavLink to="/about">About Me</NavLink></li>
                <li className={r.pathname === "/contact" ? "current" : ""}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>)
}