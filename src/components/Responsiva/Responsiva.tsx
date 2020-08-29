import React from 'react'
import './Responsiva.scss'
import logo from '../../assets/media/img/LogoV3.svg'

import print from '../../assets/media/img/Guardado.svg'
import save from '../../assets/media/img/Guardado.svg'
import tools from '../../assets/media/img/Herramientas.svg'

import paper from '../../assets/media/img/ManojoHojas.svg'
import products from '../../assets/media/img/Cola.svg'
import articles from '../../assets/media/img/Limpieza.svg'
import devices from '../../assets/media/img/Pantalla.svg'

function Responsiva() {
    return (
        <div className="Responsiva">

            {/* ---------------HEADER-------------- */}
            <header className="header">
                <img className="header__logo" src={logo} alt="Logo"/>
                <h1 className="header__sucursal">Santa Ana</h1>
                <form className="header__form main-card">
                    <div className="form__usuarios__section">
                        <div className="usuario__content usuario1 input-card">
                            <p className="usuario__value">Usuario 1</p>
                            <p className="usuario__title">RESPONSABLE</p>
                        </div>
                        <div className="usuario__content usuario2 input-card">
                            <input className="usuario__value" type="text" value="Usuario 2"/>
                            <p className="usuario__title">RECIBE</p>
                        </div>
                    </div>

                    <div className="form__caja__content input-card">
                        <input className="caja__value" type="text"/>
                        <p className="caja__title">CAJA</p>
                    </div>

                    <div className="form__fechas__section">
                        <label className="fecha__label">Entrada:</label>
                        <div className="fecha__content input-card">
                            <input className="fecha__date" type="datetime" />
                            <input className="fecha__time" type="datetime"/>
                        </div>
                        <label className="fecha__label" >Salida:</label>
                        <div className="fecha__content input-card">
                            <input className="fecha__date" type="datetime" />
                            <input className="fecha__time" type="datetime" />
                        </div>
                    </div>
                </form>
            </header>


            {/* ----------------OPTIONS--------------- */}
            <div className="options">
                <div className="options__mainBtns-section">
                    <button className="printBtn generalBtn"><img src={print} alt="Imprimir"/></button>
                    <button className="saveBtn  generalBtn"><img src={save} alt="Guarda"/></button>
                    <button className="adminBtn generalBtn"><img src={tools} alt="Administrador"/></button>
                </div>
                <div className="options__controlBtns-section">
                    <button className="paperBtn    generalBtn"><img src={paper} alt="Control de Copias"/></button>
                    <button className="productsBtn generalBtn"><img src={products} alt="Control de Productos"/></button>
                    <button className="articlesBtn generalBtn"><img src={articles} alt="Control de Artículos"/></button>
                    <button className="devicesBtn  generalBtn"><img src={devices} alt="Control de Dispositivos"/></button>
                </div>
            </div>



            <div className="body">





                {/* ---------------PRODUCTS----------------- */}
                <div className="body__section-1">
                    <div className="products main-card">
                        <h2>Productos</h2>

                        <div className="products__content-sold input-card">
                            <h3>Vendidos</h3>
                            <div className="products__sold">
                                <ul>
                                    <li>
                                        <p>item</p>
                                        <p>0</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="products__content-inventory input-card">
                            <h3>Recibidos</h3>
                            <h3>Entregados</h3>
                            <div className="products__inventory">
                                <ul>
                                    <li>
                                        <p>item</p>
                                        <input type="number" />
                                        <input type="number" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="body__section-2">
                    

                    {/* ----------------COPY------------------ */}
                    <div className="copy main-card">
                        <h2>Copias</h2>
                        <div className="copy__section">
                            <label>Ingreso de papel</label>
                            <input type="checkbox" />
                            <div>
                                <div className="copy__content-topLeft input-card">
                                    <input type="text" />
                                    <p>Copias B/N</p>
                                </div>
                                <div className="copy__content-topRight input-card">
                                    <input type="text" />
                                    <p>Copias Color</p>
                                </div>
                                <div className="copy__content-bottomLeft input-card">
                                    <input type="text" />
                                    <p>Impresiones B/N</p>
                                </div>
                                <div className="copy__content-bottomRight input-card">
                                    <input type="text" />
                                    <p>Impresiones Color</p>
                                </div>
                            </div>
                            <div className="copy__content-paper input-card">
                                <input type="text" />
                                <p>Papel</p>
                            </div>
                        </div>
                    </div>





                    {/* -----------------Observations-------------------- */}
                    <div className="observations main-card">
                        <h2>Observaciones</h2>
                        <div className="observations__content input-card">
                            <h3>Detalle</h3>
                            <h3>Monto</h3>
                            <div>
                                <ul>
                                    <li>
                                        <input type="text" />
                                        <label>$</label>
                                        <input type="number" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button>+</button>
                    </div>







                    {/* --------------------REPORTS------------------------ */}
                    <div className="btnsArea">
                        <input type="checkbox" />
                        <label>Gadgets y dispositivos verificados.</label>
                        <button>Reportar dispositivos faltantes respcto al turno anterior</button>
                        <button>¿Escasea algún producto?</button>
                    </div>
                </div>
                



                <div className="body__section-3">



                    {/* -------------------INITIAL COUNT---------------------- */}
                    <div className="initialCount main-card">
                        <div className="initialCount__content input-card">
                            <label>$</label>
                            <input type="number"/>
                            <p>Caja Inicial</p>
                        </div>
                    </div>



                    {/* ------------------------ARQUEO--------------------------- */}
                    <div className="arqueo main-card">
                        <h2>Arqueo</h2>
                        <div className="arqueo__section-inventory">
                            <div>
                                <ul>
                                    <li>
                                        <label>$0.5</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$1</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$2</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$5</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$10</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$20</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <label>$20</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$50</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$100</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$200</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$500</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                    <li>
                                        <label>$1000</label><div className="arqueo__content input-card"><input type="number"/></div>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        {/* -----------------------COUNT--------------------------- */}
                        <div className="aqueo__section-count">
                            <div>
                                <div><p>Efectivo:</p><p>$0</p></div>
                                <p>Observaciones:</p>
                                <p>Total:</p>
                            </div>
                            <div>
                                <div><p>Sobre:</p><p>$0</p></div>
                                <p>$0</p>
                                <p>$0</p>
                            </div>
                        </div>
                    </div>



                    {/* --------------------------MAIN COUNT------------------------------- */}
                    <div className="mainCount resalted-card">
                        <h2>Contadores</h2>
                        <div className="mainCount__content input-card">
                            <div>
                                <p>Copias:</p>
                                <p>Productos:</p>
                                <p>Recaudación:</p>
                                <p>Total:</p>
                            </div>
                            <div>
                                <p>$0</p>
                                <p>$0</p>
                                <p>$0</p>
                                <div><p>$0</p></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Responsiva;