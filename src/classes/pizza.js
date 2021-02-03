import {tprices , sizePrice} from './toppings';

export default class Pizza {
    
    constructor(pizza_size , price , toppings){
        
        this.pizza_size = pizza_size;
        this.price = price;
        this.toppings = toppings;

        this.priceSet();

    }

    priceSet(){
        var tPrice = 0;
        tPrice += sizePrice.get(this.pizza_size);
        console.log(tPrice);

        for(var i = 0; i < this.toppings.length ; i++){
            console.log(tprices.get(this.toppings[i].name));
            tPrice += tprices.get(this.toppings[i].name);
        }

        this.price = tPrice;
    }



}