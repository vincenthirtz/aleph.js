import React from 'https://esm.sh/react'
import './style/main.css'

export default function Portfolio() {

    const items = [{
        id: 0,
        image: '/dg.jpg',
        name: 'Denis Godefroy',
        description: 'Site officiel de Denis Godefroy (1949-1997), dédié à la présentation de l’œuvre, de l’artiste et de son actualité.',
        url: 'https://denisgodefroy.fr/'
    },
    {
        id: 1,
        image: '/pb.jpg',
        name: 'Petit Boukan',
        description: 'Service d’événements culinaires, créatifs et graphiques. Petit Boukan c’est aussi des gifts, accessoires, illustrations fun et ludiques pour égayer tous nos moments de plaisir.',
        url: 'https://www.petitboukan.com/'
    },
    {
        id: 2,
        image: '/ds.png',
        name: 'Douceurs salées',
        description: 'Blog sur plusieurs thèmes.',
        url: 'https://douceurs-salees.fr/'
    },
    {
        id: 3,
        image: '/kf.png',
        name: 'Starteurkit',
        description: 'Starterkit pour créer un site rapidement et facilement, idéal pour les étudiants.',
        url: 'https://starteurkit.netlify.app/'
    },


    ]


    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-4 col-6-medium col-12-small">
                    <section className="box">
                        <a href="#" className="image featured">   <img src={item.image} title={item.name} /></a>
                        <header>
                            <h3>{item.name}</h3>
                        </header>
                        <p>{item.description}</p>
                        <footer>
                            <ul className="actions">
                                <li><a href={item.url} target="_blank" className="button alt">Voir</a></li>
                            </ul>
                        </footer>
                    </section>
                </div>))}
        </div>)
}