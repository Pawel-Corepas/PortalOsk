import { Injectable } from '@angular/core';
import { Categories, CategoriesControllerService } from 'rest_client_1.0';

@Injectable()
export class CategoriesService {

categories: Categories[];

constructor (private categoriesService: CategoriesControllerService){

}
getCategories(){
    
    this.categoriesService.categoriesControllerFind().subscribe(
        (categories)=> {
            this.categories = categories
        }
    )
    return this.categories
}

}