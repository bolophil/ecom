//add to cart
export const addCart =(product)=>{
    return{
        type : "ADDITEM",
        payload : product
    }
}
//delete from cart
export const delCart =(product)=>{
    return{
        type : "DELITEM",
        payload : product
    }
}
//delete all
export const delAllCart =(product)=>{
    return{
        type : "DELALLITEM",
        payload : product
    }
}
