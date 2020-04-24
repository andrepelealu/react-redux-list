// Action Creator 

export const ambildata=()=>{

    const data= [
        {id:1, namaproduk: 'kipas angin 1', harga:40001, stok:400},
        {id:2, namaproduk: 'kipas angin 2', harga:40002, stok:400},
        {id:3, namaproduk: 'kipas angin 3', harga:40003, stok:400},
        {id:4, namaproduk: 'kipas angin 4', harga:40004, stok:400},
        {id:5, namaproduk: 'kipas angin 5', harga:40005, stok:400}
    ]
//action

    return {
        type: 'AMBIL_DATA',
        data: data
    }
}

export const pilihProduk=(produk)=>{
    return{
        type: 'PILIH_PRODUK',
        data: produk
    }
}