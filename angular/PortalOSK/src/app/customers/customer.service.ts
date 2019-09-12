import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Customer } from './customer';
import { ProductService } from '../products/produc.service';
import { CustomersService } from './customers-list/customers.service';

@Injectable ()
export class CustomerService {
    customer: Customer = new Customer ();

    constructor( private productService: ProductService, private customersService: CustomersService) {
        this.customer = this.customersService.customers[2];
        this.addProduct();
    }

    addProduct() {
     this.customer.products = this.productService.getProducts();
     console.log('product initiated');
    }

    getCustomerProducts() {
     return this.customer.products;
    }

}
