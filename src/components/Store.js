import React from 'react'

export const ProductContext = React.createContext();

export const ProductProvider = (props) =>{
    const products= [
        {
            "id": "1",
            "title": "Икра форели",
            "price": 800,
            "old_price": 900,
            "weight": 500,
            "img": "https://www.cavi-cav.com.ua/wp-content/uploads/2018/09/krasnaya-ikra-gorbushi.jpg",
            "count": 1
        },
        {
            "id": "2",
            "title": "Икра горбуши",
            "price": 900,
            "old_price": 1000,
            "weight": 500,
            "img": "https://www.cavi-cav.com.ua/wp-content/uploads/2018/09/krasnaya-ikra-gorbushi.jpg",
            "count": 1
        }
    ];
    const [total, setTotal] = React.useState(0);
    const [cart, setCart] = React.useState([]);

    const addToCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart,...data]);
        }else{
            cart.forEach(item =>{
                if(item.id === id){
                    item.count += 1;
                }
            })
            setCart(cart);
            getTotal();
        }
    };

    const increase = (id) =>{
        cart.forEach(item =>{
            if(item.id === id){
                item.count += 1;
            }
        })
        setCart(cart);
        getTotal();
    };

    const decrease = (id) =>{
        cart.forEach(item =>{
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        setCart(cart);
        getTotal();
    };

    const removeProduct = (id) =>{
        cart.forEach((item, index) =>{
            if(item.id === id){
                cart.splice(index, 1)
            }
        })
        setCart(cart);
        getTotal();
    };

    const getTotal = () =>{
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        setTotal(res);
    };

    return (
        <ProductContext.Provider value={{ products, addToCart, cart, decrease, increase, removeProduct, total, getTotal }}>
            { props.children }
        </ProductContext.Provider>
    )
}