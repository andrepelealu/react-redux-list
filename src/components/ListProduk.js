import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ambildata} from '../action'

export class ListProduk extends Component {
  
    componentDidMount(){
        this.props.ambildata()
    }

    renderList(){
        return this.props.listProdukProps.map(produk=>{
            return (
                <h3 key={produk.id}>{produk.namaproduk}</h3>
            )
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const stateToProps = state =>{
    return{
        listProdukProps : state.listProduk
    }
}
export default connect(stateToProps, {ambildata})(ListProduk)
