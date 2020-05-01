import React from 'react'
import {connect} from 'react-redux'

class SearchBar extends React.Component{

    // 通过react-redux传值
    changeFilterText = (e) => {
        this.props.sentfilterTextAction(e.target.value)
    }


    changeInStockOnly = (e)=>{
        this.props.onChangeInStockOnly(e.target.value)
    }

    render(){
        return(
            <>
                <input type="text" value={this.props.filterText} placeholder="please input" onChange={this.changeFilterText}/>
                <br/>
                <input type="checkbox" id="" onChange={this.changeInStockOnly}/>Only show products in stock
            </>
        )
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        sentfilterTextAction:(value)=>{
            dispatch({
                type:'sentfilterText',
                value
            })
        }
    }
}

export default connect(null,mapDispatchToprops)(SearchBar) 