export default class Order {
    
    constructor(client_id, order_price , pizzas ){
        this.client_id = client_id;
        this.order_price = order_price;
        this.pizzas = pizzas;

        this.setOrdertotal();
    }

    setClientid(clientId){
        this.client_id = clientId;
    }

    setOrderPrice(price){
        this.order_price = price; 
    }

    setPizzas(pizzas){
        this.pizzas = pizzas;
    }

    setOrdertotal(){
        var total = 0;

        for(var i = 0 ; i < this.pizzas.length ; i++){
            total += this.pizzas[i].price;
        }


        this.order_price = total;
    }

}
