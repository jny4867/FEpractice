import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductInfo.css';

const ProductInfo = () => {
    const {productId} = useParams();
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div> 제품 정보를 찾을 수 없습니다.</div>
    }

    return (
    <> 
    <h1 className='pName'>{product.name}</h1>
    <div className='pInfo-container'>
                <div className='pInfo-inner'>
                    <img src={product.imageUrls[0]} alt={product.name} 
                    style={{maxWidth: '40%', height: 'auto'}}/>
                    <div className='pInfo-inner-inner'>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button id='cart'>ADD TO CART</button>
                        </div>
                        </div>
                        </div>
                        <hr></hr>
                        <img src={product.imageUrls[1]} alt={product.name} style={{maxWidth: '100%', height: 'auto'}}/>
                        </>
                        );
                    };
                    export default ProductInfo;