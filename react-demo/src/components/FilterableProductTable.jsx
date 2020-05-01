import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { connect } from 'react-redux'

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allCommodityList:[
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ],
            filterText:'',
            inStockOnly:false,
            selectCommodityList:[
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ]
        }
        this.onChangeFilterText = this.onChangeFilterText.bind(this)
        this.onChangeInStockOnly = this.onChangeInStockOnly.bind(this)
    }

    onChangeFilterText(filterText){
        this.setState({filterText:filterText})
    }

    onChangeInStockOnly(inStockOnly){
        this.setState({
            inStockOnly:inStockOnly
        })
    }
    
    updateFilterText = () =>{        
        console.log(this.props.value)
        this.setState({
            filterText:this.props.value
        })
    }

    render(){
        console.log(this.props)
        return(
            <>
                <SearchBar
                    filterText={this.props.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onChangeFilterText={this.onChangeFilterText} 
                    onChangeInStockOnly={this.onChangeInStockOnly}
                />
                <ProductTable list={this.state.selectCommodityList}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(FilterableProductTable)