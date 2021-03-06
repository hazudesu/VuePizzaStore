/** Services para la conexion del front end
 *  con la API en DJANGO **/

//const axios = require('axios').default;
import http from "../http-common";

export default class apiService {
    /* GET METHODS */

    getOrderList() {
        return http.get("/orders/");
    }

    getOrderDetail(id) {
        return http.get(`/orders/${id}/`);
    }

    getSales_Topping(topping) {
        //var data;
        return http.get(`/ordersbytop/${topping}/`);
    }

    getSales_Size(size) {
        return http.get(`/ordersbysize/${size}/`);
    }

    postOrder(data) {
        return http.post("/orders/", data);
    }
}
