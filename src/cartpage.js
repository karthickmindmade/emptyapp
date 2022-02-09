import React, { useState, useEffect, useContext } from 'react';
import Drawer from "@mui/material/Drawer";
import Badge from '@mui/material/Badge';
import { CounterContext } from './contex/productprovider'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Cartproductcount from './cartproductcount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
function Cartpage(props) {
    const { value, handleRemove, productsList } = useContext(CounterContext);
  
    const [open, setopen] = useState(false)
    const [state, setState] = React.useState({
        right: false
    });
    const openclose = () => {
        setopen(!open)
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const [count, setCount] = useState();
    useEffect(() => {
        setCount(value.length)
    }, [value])
    return (
        <>
            <div>
                <React.Fragment>
                    <div onClick={openclose}><div onClick={toggleDrawer("right", !open)}>  <IconButton color="inherit">
                        <Badge badgeContent={count} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton></div></div>
                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                    >
                     
                            <div className="mt-5 width-40">
                                {productsList.filter(val => {
                                    for (let i = 0; i <= 20; i++) {
                                        if (val.id === value[i]) {
                                            return val;
                                        }
                                    }
                                }).map((product) =>
                                    <div>
                                        <Cartproductcount product={product} />
                                    </div>
                                )}
                            </div>
                       
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}
export default Cartpage;