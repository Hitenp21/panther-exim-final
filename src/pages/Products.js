import { Link, useLocation } from "react-router-dom";
import "../index.css";
import ProductHeader from "../components/productHeader";
import Data from "../data/data";
import WhatsAppButton from "../components/whatsapp";


export default function Products() {
    const location = useLocation();

    const currentHeading = location.pathname.split('/')[2]; 
    const filteredData = Data.find(item => item.link.split('/')[2] === currentHeading);

    return (
        <>
            <ProductHeader />
            <p className="subCategoryP">OUR PRODUCT</p>
            <h1 className="subCategoryh1">{filteredData.heading}</h1>
            <div className="subCategory">
                {Data.filter(item => (item.link.split('/')[2]) === currentHeading).map((item, index) => (
                    <div key={index}>
                        <p>{item.title}</p>
                        <Link to={item.link}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
                <WhatsAppButton/>
        </>
    )
}