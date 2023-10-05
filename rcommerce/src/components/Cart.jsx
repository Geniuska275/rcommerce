import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { TfiClose } from 'react-icons/tfi';
import Divider from '@mui/material/Divider';
import { isCart } from '../redux/logic';
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {


    const showCart = useSelector((state) => state.genToggle.showCart);
    const dispatch = useDispatch();


    const toggleDrawer = () => {
        dispatch(isCart());
    };

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            style={{ zIndex: '10', position: 'relative' }}
        >
            <div className='py-3 px-3 flex items-center justify-between '>
                <p className='font-bold '> Your cart is (0 item)</p>
                <TfiClose
                    className='cursor-pointer text-lg text-black hover:scale-110 transition-all' onClick={toggleDrawer} />
            </div>

            <Divider />

            <div className="CartBody py-3 px-3">
                <h3> Your Cart is Currently Empty </h3>
            </div>
        </Box>
    );

    return (
        <div className='relative'>
            <React.Fragment key='right'>
                <Drawer
                    anchor='right'
                    open={showCart}
                    onClose={toggleDrawer}
                >
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default Cart;
