import { Link } from "react-router-dom";
import background from "../image/about.jpg";
import "../index.css";
import "./productHeader.css";

export default function ProductHeader() {
    return (

        <div className="product-header" style={{
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} >
            <div className="content">

                <div className="header-title">
                    <h3 >
                        Products
                    </h3>
                </div>
                <div className="header-content">

                    <span>
                        <Link to="/" style={{ color: "white", textDecoration: "none" }} >
                            <span
                                style={{ color: "white" }}
                                onMouseOver={e => e.target.style.color = "orange"}
                                onMouseOut={e => e.target.style.color = "white"}
                            >
                                Home
                            </span>
                        </Link>
                    </span>

                    <img src="/images/home/arrow.png" />
                    <span>
                        <Link to="/category" style={{ color: "white", textDecoration: "none" }}>
                        <span
                                style={{ color: "white" }}
                                onMouseOver={e => e.target.style.color = "orange"}
                                onMouseOut={e => e.target.style.color = "white"}
                            >
                            Products
                            </span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}