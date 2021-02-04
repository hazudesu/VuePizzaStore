

export default class Toppings {

    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }


}

export  const tops = [
    new Toppings("Jamon"),
    new Toppings("Champiñones"),
    new Toppings("Pimenton"),
    new Toppings("Doble Queso"),
    new Toppings("Aceitunas"),
    new Toppings("Peperoni"),
    new Toppings("Salchichon")
];

var topMap = new Map();

topMap.set("Jamon" , new Toppings("Jamon"));
topMap.set("Champiñones" , new Toppings("Champinones"));
topMap.set("Pimenton" , new Toppings("Pimenton"));
topMap.set("Doble queso" , new Toppings("Doble queso"));
topMap.set("Aceitunas" , new Toppings("Aceitunas"));
topMap.set("Pepperoni" , new Toppings("Pepperoni"));
topMap.set("Salchichon" , new Toppings("Salchichon"));

export const maptop = topMap;

var topprice = new Map();

topprice.set("Jamon", 4.0);
topprice.set("Champinones" , 3.5);
topprice.set("Pimenton" , 3.0);
topprice.set("Doble queso" , 4.0);
topprice.set("Aceitunas" , 5.75);
topprice.set("Pepperoni" , 3.85);
topprice.set("Salchichon" , 6.25);

export const tprices = topprice;

var sizem = new Map();

sizem.set("Pequeña" , 'sm');
sizem.set("Mediana" , 'm');
sizem.set("Grande" , 'lg');

export const sizet = sizem;

var sizep = new Map();

sizep.set("sm" , 10);
sizep.set("m" , 16);
sizep.set("lg" , 20);

export const sizePrice = sizep;


