import React, { useContext, useEffect, useState } from "react"
import { CounterContext } from './contex/productprovider'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
function Cartproductcount(props) {
    const { value, handleRemove, store } = useContext(CounterContext);
    const { productsList } = props
    const [productcount, setproductcount] = useState([])

    useEffect(() => {

        setproductcount(([...value].filter((val) => { if (val === productsList.id) { return val } })).length)
    }, [productsList.id, value])
    return (


        <Badge badgeContent={productcount} color="secondary">
            <div>
                <div className='colorlist flex' key={productsList.id}>
                    <div ><img src={productsList.image} alt="avatar" width={50} height={60} /></div>
                    <div>
                        <div className="cartproduct-title">{productsList.title}</div>
                        <div className="cart-count-btn-area flex">
                            <div>${productsList.price * productcount}</div>
                            <div className="flex ms-2">
                                <div className="cart-count-btn">-</div>
                                <div className="">{productcount}</div>
                                <div className="cart-count-btn" onClick={() => store(productsList)}>+</div>
                            </div>
                        </div>
                    </div>
                    <Button className="remove-button float-end" onClick={() => handleRemove(productsList.id)}><DeleteIcon /></Button>
                </div>
            </div>
        </Badge>


    );
}

export default Cartproductcount;