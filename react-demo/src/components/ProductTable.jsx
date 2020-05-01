import React from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

function ProductTable(props) {
    const list = props.list
    let typeArr = [];
    for (let index = 0; index < list.length; index++) {
        if (!typeArr.includes(list[index].category)) {
            typeArr.push(list[index].category)
        }
    }
    let listTypeArr = []
    typeArr.map(item=>{
        let obj = {
            name:item,
            listArr:[]
        }
        list.map(item2=>{
            if (item === item2.category) {
                obj.listArr.push(item2)
            }
        })
        listTypeArr.push(obj)
    })

    return(
        <div>
            <p>
                <span>Name</span>
                <span>Price</span>
            </p>
            {
                listTypeArr.map((item,index)=>
                    <div key={index}>
                        <ProductCategoryRow type={item.name}/>
                        <ProductRow list={item.listArr}></ProductRow>
                    </div>
                )
            }
        </div>
    )
}
export default ProductTable