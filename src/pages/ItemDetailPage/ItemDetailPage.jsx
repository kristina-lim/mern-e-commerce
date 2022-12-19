import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './ItemDetailPage.css';

export default function ItemDetailPage({ handleAddToOrder }) {
  const [itemDetail, setItemDetail] = useState({});
  const {itemId} = useParams();
  
  useEffect(() => {
    const getItem = async () => {
      const ItemData = await itemsAPI.getById(itemId);
      setItemDetail(ItemData);
    }
    getItem();
  }, [itemId]);

  return (
    <MDBRow className='mb-3 ItemDetail'>
      <MDBCol lg='4 name'>
        {itemDetail.name}
      </MDBCol>
      <MDBCol lg='4 emoji flex-ctr-ctr'>
        {itemDetail.emoji}
      </MDBCol>
      <MDBCol lg='4 buy'>
        <span>${itemDetail.price}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(itemDetail._id)}>
          ADD
        </button>
      </MDBCol>
    </MDBRow>
    // <div className="">
    //   <div className="name"></div>
    //   <br></br>
    //   <div className="emoji flex-ctr-ctr"></div>
    //   <div className="buy">
        
        
    //   </div>
    // </div>
  )
}