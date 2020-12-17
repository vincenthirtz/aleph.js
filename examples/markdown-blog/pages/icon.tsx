import React from "https://esm.sh/react"

export default function Icon({ name = '', link = '' }) {

    return (
        <a href={link} target="_blank">
            <i className={`fab fa-${name}`}></i>
        </a>
    )
}