import Lechuga from "../assets/ejemplo_producto.png";
import Chirimoya from "../assets/chirimoya.png";
import Naranjas from "../assets/naranjas.png";
import './productos.css';

function Productos() {
    return (
        <div classNameName="Productos">
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img className="image" src={Lechuga}/>
                    </div>
                    <div className="contentBx">
                        <h2>Lechuga</h2>
                        <div className="size">
                            <h3>Cantidad :</h3>
                            <span>1 U.</span>
                            <span>2 U.</span>
                            <span>3 U.</span>
                            <span>4 U.</span>
                        </div>
                        <a href="#">Compra ahora</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img className="image" src={Chirimoya}/>
                    </div>
                    <div className="contentBx">
                        <h2>Chirimoya</h2>
                        <div className="size">
                            <h3>Cantidad :</h3>
                            <span>1 U.</span>
                            <span>2 U.</span>
                            <span>3 U.</span>
                            <span>4 U.</span>
                        </div>
                        <a href="#">Compra ahora</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img className="image" src={Naranjas}/>
                    </div>
                    <div className="contentBx">
                        <h2>Naranjas</h2>
                        <div className="size">
                            <h3>Cantidad :</h3>
                            <span>1 U.</span>
                            <span>2 U.</span>
                            <span>3 U.</span>
                            <span>4 U.</span>
                        </div>
                        <a href="#">Compra ahora</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productos;
