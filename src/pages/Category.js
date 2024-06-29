import { Link } from "react-router-dom";
import "../index.css";
import ProductHeader from "../components/productHeader";


export default function Category() {
    return (
        <>
        <ProductHeader />
        <div className="category">
            <div>
                <p>Cable Gland</p>
                <Link to="/category/cables">

                    <img src="https://lntsufin.com/storage/mediafiles/catalog/live/16691-10037/original/16691-10037_image_0.jpg" alt="" />
                </Link>
            </div>
            <div>
                <p>Sanitary Parts</p>
                <Link to="/category/sanitary">
                    <img src="https://c8.alamy.com/comp/2AAT8PY/sanitary-faucets-isolated-on-white-background-material-nickel-plated-brass-2AAT8PY.jpg" alt="" />
                </Link>
            </div>
            <div>
                <p>Category 3</p>
                <Link to="/category/cables">

                    <img src="https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/p/g/pg_13.5_metal.jpg" alt="" />
                </Link>

            </div>
            <div>
                <p>Category 4</p>
                <Link to="/category/cables">

                    <img src="https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/p/g/pg_13.5_metal.jpg" alt="" />
                </Link>

            </div>
        </div>
        </>
    )
}