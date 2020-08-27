import React from 'react';
import './Responsiva.scss';


function Responsiva() {
    return (
        <div className="Responsiva">

            {/* ---------------HEADER-------------- */}
            <header className="responsiva__header">
                <img className="header__logo" src="" alt=""/>
                <h1 className="header__sucursal">Santa Ana</h1>
                <form className="header__form main-card">
                    <div className="form__usuarios">
                        <div className="inputBox__usuario">
                            <input type="text" value="Usuario"/>
                            <p>RESPONSABLE</p>
                        </div>
                        <div className="inputBox__usuario">
                            <input type="text" value="Usuario 2"/>
                            <p>RECIBE</p>
                        </div>
                    </div>

                    <div className="form__caja">
                        <input type="number" />
                        <p>CAJA</p>
                    </div>

                    <div className="form__fechas">
                        <label>Entrada:</label>
                        <div className="input-card">
                            <input type="datetime" />
                        </div>
                        <input type="datetime"/>
                        <label>Salida:</label>
                        <div className="input-card">
                            <input type="datetime" />
                        </div>
                    </div>
                </form>
            </header>


            {/* ----------------OPTIONS--------------- */}
            <div className="options">
                <div className="options__mainBtns-section">
                    <button className="printBtn generalBtn"><img src="" alt="Imprimir"/></button>
                    <button className="saveBtn  generalBtn"><img src="" alt="Guarda"/></button>
                    <button className="adminBtn generalBtn"><img src="" alt="Administrador"/></button>
                </div>
                <div className="options__controlBtns-section">
                    <button className="copysBtn    generalBtn"><img src="" alt="Control de Copias"/></button>
                    <button className="productsBtn generalBtn"><img src="" alt="Control de Productos"/></button>
                    <button className="articlesBtn generalBtn"><img src="" alt="Control de Artículos"/></button>
                    <button className="devicesBtn  generalBtn"><img src="" alt="Control de Dispositivos"/></button>
                </div>
            </div>



            <div className="body">





                {/* ---------------PRODUCTS----------------- */}
                <div className="body__section-1">
                    <div className="main-card" >
                        <h2>Productos</h2>

                        <div className="input-card">
                            <h3>Vendidos</h3>
                            <table>
                                <tr>
                                    <td>
                                        <p>item</p>
                                        <p>0</p>
                                    </td>
                                </tr>

                            </table>
                        </div>

                        <div className=" input-card">
                            <h3>Recibidos</h3>
                            <h3>Entregados</h3>
                            <table>
                                <tr>
                                    <td>
                                        <p>item</p>
                                        <input type="number" />
                                        <input type="number" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>







                <div className="body__section-2">
                    

                    {/* ----------------COPY------------------ */}
                    <div className="main-card">
                        <h2>Copias</h2>
                        <div>
                            <label>Ingreso de papel</label>
                            <input type="checkbox" />
                            <div>
                                <div className="input-card">
                                    <input type="text" />
                                    <p>Copias B/N</p>
                                </div>
                                <div className="input-card">
                                    <input type="text" />
                                    <p>Copias Color</p>
                                </div>
                                <div className="input-card">
                                    <input type="text" />
                                    <p>Impresiones B/N</p>
                                </div>
                                <div className="input-card">
                                    <input type="text" />
                                    <p>Impresiones Color</p>
                                </div>
                            </div>
                            <div className="input-card">
                                <input type="text" />
                                <p>Papel</p>
                            </div>
                        </div>
                    </div>





                    {/* -----------------Observations-------------------- */}
                    <div className="main-card">
                        <h2>Observaciones</h2>
                        <div className="input-card">
                            <h3>Detalle</h3>
                            <h3>Monto</h3>
                            <table>
                                <tr>
                                    <td>
                                        <input type="text" />
                                        <label>$</label>
                                        <input type="number" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <button>+</button>
                    </div>







                    {/* --------------------REPORTS------------------------ */}
                    <div className="section-2__btnsArea">
                        <input type="checkbox" />
                        <label>Gadgets y dispositivos verificados.</label>
                        <button>Reportar dispositivos faltantes respcto al turno anterior</button>
                        <button>¿Escasea algún producto?</button>
                    </div>
                </div>
                



                <div className="body__section-3">



                    {/* -------------------INITIAL COUNT---------------------- */}
                    <div className="main-card">
                        <div className="input-card">
                            <label>$</label>
                            <input type="number"/>
                            <p>Caja Inicial</p>
                        </div>
                    </div>



                    {/* ------------------------ARQUEO--------------------------- */}
                    <div className="main-card">
                        <h2>Arqueo</h2>
                        <div>
                            <table>
                                <tr>
                                    <td>
                                        <label>$0.5</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$1</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$2</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$5</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$10</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$20</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td>
                                        <label>$20</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$50</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$100</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$200</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$500</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                    <td>
                                        <label>$1000</label><div className="input-card"><input type="number"/></div>
                                    </td>
                                </tr>
                            </table>
                        </div>



                        {/* -----------------------COUNT--------------------------- */}
                        <div>
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
                    <div className="resalted-card">
                        <h2>Contadores</h2>
                        <div className="input-card">
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