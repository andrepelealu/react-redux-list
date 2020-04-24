import React from 'react'
import {connect} from 'react-redux'

function DetailProduk({detailProps}) {
    // console.log(props.detailProps)

    if(!detailProps.id){
        return <div>Pilih Produk ....</div>
    }
    const {id, namaproduk,stok,harga} = detailProps
    
    return (
        <div>
            <h4>Nama Produk : {namaproduk}</h4>
            <p>Id: {id}</p>
            <p>Harga : Rp. {harga}</p>
            <p>Stok: {stok}</p>
            
        </div>
    )
}

const stateToProps=state=>{
    return {
        detailProps : state.pilihan
    }
}
export default connect(stateToProps)(DetailProduk)