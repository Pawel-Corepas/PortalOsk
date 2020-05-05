import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Customer } from './customer';
import { ProductService } from '../products/produc.service';
import { CustomersService } from './customers-list/customers.service';
import { Students } from 'rest_client_1.0/model/students';

@Injectable ()
export class CustomerService {
    student:Students;
    customer: Customer;

    constructor( private productService: ProductService, private customersService: CustomersService) {
        this.customer = this.customersService.customers[2];
        this.addProduct();
    }

    addProduct() {
     this.customer.products = this.productService.getProducts();

    }

    getCustomerProducts() {
    return this.customer.products;
    }

    setStudent(student:Students){
        this.student=student;
    }

    getStudent(){
        return this.student
    }

}
