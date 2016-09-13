import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'
import Hero from 'components/Hero'

export default class Leistungen extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle + ' | leistungen'  }>
                <main>
                    <section className="sub_intro">
                        <Forrest className="sub_intro-forrest"
                            mode="single"/>
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Wir finden den richtigen Weg durch den Wald.
                            </h1>
                        </header>
                    </section>

                    <Hero title="...mehr als E-Mail Marketing."
                            image="/img/weg.jpg">
                        <p>
                            (LEISTUNGEN) Analyse Umsetzung Template-
                            Programmierung Projektmanagement Design
                            Versandunterstützung Seminare & Workshops Es id
                            quibusdam quam aut quia volum fugia culloriat.
                            Atur alicatur a del is eum natis maio. Itam
                            explaut quibus et asperciendam rendus delectus
                            que nonsequi doluptius, idellessit acesto quo
                            molum dello et, sus.
                        </p>
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}
