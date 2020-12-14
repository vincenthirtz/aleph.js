import { Link } from 'https://deno.land/x/aleph/mod.ts';
import React, { ComponentType } from 'https://esm.sh/react';
import Header from './header.tsx';
interface Metadata {
    title: string
    author: string
    date: string
}

export default function BlogPosts({ Page }: { Page: ComponentType & { meta: Metadata } }) {
    return (
        <>
            <Header title={Page.meta.title} />
            <Page />
            <p style={{ color: '#666' }}>created by <em style={{ color: '#000' }}>{Page.meta.author}</em> at <em style={{ color: '#000' }}>{Page.meta.date}</em></p>
            <p><Link to="/blog">My Blog</Link></p>
        </>
    )
}
