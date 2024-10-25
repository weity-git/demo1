import requst from './requst';

export const  get_Product_list =  ()=>{
     return requst({
        method:"get",
        url:"/api/users/product/list"
    })
}

export const get_product_one_list=(id)=>{
    return requst({
        method:"get",
        url:"/api/users/product/urls/list",
        params:{
            id:id
        }
    })
}
export const get_product_car=(userID)=>{
    return requst({
          method:"get",
          url:"/api/users/shoppingcar/cartlist",
          params:{
            id:userID
        }
    })
}

export const post_add_product_cart=(userID,productID,quantity,price)=>{
    return requst({
        method:"post",
        url:"/api/users/shoppingcar/add",
        data:{
            "userId": userID,
            "productId": productID,
            "quantity": quantity,
            "price": price
        }
    })
}

export const post_login_users=(Phone)=>{
    return requst({
        method:"post",
        url:"/api/users/login",
        data:{
            "phone":Phone
        }
    })
}
export const post_login_users_code=(Phone,code)=>{
    return requst({
        method:"post",
        url:"/api/users/check",
        data:{
            "phone":Phone
        },
        params:{
            "code":code
        }
    })
}
export const get_shopping_cart=(userID)=>{
 return requst({
    method:"get",
    url:"/api/users/shoppingcar/cartlist",
    params:{
        userid:userID
    }
 })
}