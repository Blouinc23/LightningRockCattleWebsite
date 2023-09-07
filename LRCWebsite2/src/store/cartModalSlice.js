import {createSlice} from '@reduxjs/toolkit';

const cartModalSlice = createSlice({
    name: 'cartModal',
    initialState: {
        showCartModal: false
    },
    reducers: {
        toggleCartModal(state) {
            state.showCartModal = !state.showCartModal;
        }
    }
})

export const cartModalActions = cartModalSlice.actions;

export default cartModalSlice;