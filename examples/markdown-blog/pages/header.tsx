import { Head } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'

export default function Header(title: "") {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        </Head>
    )
}



