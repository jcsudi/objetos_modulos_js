
import * as shippingService from './shipping-service.js'

export function total(order){

    const x = shippingService.shipment(order);
    const y = order.basic * (order.discount / 100);
    
    const total = order.basic - y + x;
    return  total;
}
