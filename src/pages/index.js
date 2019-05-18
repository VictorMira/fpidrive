import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/ind4.0.jpg'
import pic02 from '../assets/images/coding01.png'
import pic03 from '../assets/images/arduinoboard.jpg'
import pic04 from '../assets/images/proyecto.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "FPIDrive Site";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>La Industria 4.0 o la Cuarta Revolución Industrial</h2>
                            </header>
                            <p>La Industria 4.0 implica la completa digitalización de las cadenas de valor a través de la integración de tecnologías de procesamiento de datos, software inteligente y sensores; desde los proveedores hasta los clientes, para así poder predecir, controlar, planear, y producir, de forma inteligente, lo que genera mayor valor a toda la cadena</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2" >
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Las Bases de la Industria 4.0</h2>
                            </header>

                            <p>Las bases tecnológicas en que se apoya esta orientación, entre otras son las siguientes:</p>
                            <ol>
                                <li>Internet de las cosas</li>
                                <li>Sistemas ciberfísicos</li>
                                <li>Cultura maker (Cultura Hágalo usted mismo)</li>
                                <li>Fábrica 4.0</li>
                            </ol>
                            ​<p>Sin embargo, la Industria 4.0 no se reduce exclusivamente a los cuatro puntos recién citados, pues es mucho más que eso. La Industria 4.0 es consistente con la llamada Cuarta Revolución Industrial, enfatizando y acentuando la idea de una creciente y adecuada digitalización y coordinación cooperativa en todas las unidades productivas de la economía.</p>
                            <p>Es por esto que nuestro objetivo es acercar estos conceptos a la Juventud Chilena, de manera de prepararlos para esta nueva manera de ver las empresas y el desarrollo, y en nuestro caso, utilizando la <strong>Cultura Maker</strong> basada en la plataforma <strong>Arduino</strong> para entregar los conceptos y herramientas que acercará a los alumnos a comprender y proyectarse en esta nueva realidad.</p>


                            
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Metodología de Enseñanza</h2>
                            </header>
                            <p>Para la enseñanza de las herramientas, dividimos el proyecto en tres etapas</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Programación Básica</h3>
                            <p>Entregamos las herramientas báscias de programación, los conceptos del desarrollo de Software y la interfáz usuario máquinas </p>
                            <ul className="actions">
                                <li><a href="#" className="button">Ver más</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Plataforma Arduino</h3>
                            <p>Presentamos la plataforma de desarrollo Arduino, dónde se une el Software y el Hardware, y a través de proyectos prácticos, se le enseña a los alumnos a interactuar o relacionarse con el ambiente</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Ver más</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Innovación Tecnológica</h3>
                            <p>La siguiente etapa es acercar a los alumnos a la Innovación Tecnológica, donde utilizando las herramientas ya aprendidas, se puedan crear soluciones tecnológicas innovadoras, que generen Valor y aporten a la sociedad</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Ver más</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>¿Quieres Saber Más?</h2>
                        </header>
                        <p>Pronto estaremos en línea para ofrecerte todos estos servicios</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Suscribirse</a></li>
                            <li><a href="#" className="button">Aprender Más</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;