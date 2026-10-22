import React from 'react'
import products from '../data/products.json'
import ProductItem from './ProductItem'
import './ProductList.css'

function ProductList() {

    return (
        <div>
            <h2>상품 목록</h2>
            <div className="product-list-grid"> {/* 상품 아이템(ProductItem)들 배치 자리 */}
                {
                    products.map((product) => <ProductItem key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default ProductList
