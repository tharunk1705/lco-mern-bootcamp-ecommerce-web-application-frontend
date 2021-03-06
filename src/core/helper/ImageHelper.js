import React from 'react';
import { API } from '../../backend';

const ImageHelper = ({product}) => {
    console.log(`${API}/product/photo/${product._id}`);
    const imageUrl = product ? `${API}/product/photo/${product._id}` : `https://images.pexels.com/photos/6491643/pexels-photo-6491643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    return(
        <div className="rounded border border-success p-2">
            <img
                src={imageUrl}
                alt="photo of tshirt"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div> 
    );
}

export default ImageHelper;