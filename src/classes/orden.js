export default class Order {
    
    constructor(client_id, order_price , pizzas ){
        this.client_id = client_id;
        this.order_price = order_price;
        this.pizzas = pizzas;

    }


}

module.exports = new Order();