import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-microchip"></span>
                    <h1><strong>Programando</strong> aprendo a Innovar.</h1>
                    <p>Acercando las tecnologías de la Industria 4.0 a niños y jóvenes <br/>
                    y a través de la Innovación los apoyamos para Aprender y Emprender</p>
                    <ul className="actions" >
                        <li><a href="#one" className="button scrolly">Descubrir</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
