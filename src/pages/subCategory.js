import { useLocation } from 'react-router-dom';
import categoryData from '../data/category.data';
import "./subCategory.css";
import WhatsAppButton from '../components/whatsapp';

export default function SubCategory() {
  const location = useLocation();
  
  return (
    <>
    <div className="supersubCategory">
      {categoryData.map((item, index) => {
        if (location.pathname === item.link) {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <div className="productImageContainer" >
                <img className="subCatProduct" style={{border:'2px solid black', borderRadius:'10px'}} src={item.image} alt="extention.jpg" />
              </div>
              <p>{item.description}</p>
              <p>{item.finished}</p>
              <p>{item.range}</p>
              <div className="tableImageContainer">
                <img className="subCatTable" src={item.tableImage} alt="table.jpg" />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
    <WhatsAppButton />
   </>
  );
}
