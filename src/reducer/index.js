import {combineReducers} from 'redux';

const listProdukReducer=(initialState=[], action)=>{
    if(action.type === 'AMBIL_DATA'){
        return action.data
    }

    return initialState
}

const produkTerpilihReducer=(initialState=[],action)=>{
    if(action.type === 'PILIH_PRODUK'){
        return action.data
    }
    return initialState
}

export default combineReducers({
    listProduk : listProdukReducer,
    pilihan : produkTerpilihReducer
})