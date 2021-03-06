import { Injectable } from '@angular/core';
import { Categories, CategoriesControllerService } from 'rest_client_1.0';

@Injectable()
export class CategoriesService {

categories: Categories[];

constructor (private categoriesService: CategoriesControllerService){
    this.categoriesService.categoriesControllerFind().subscribe(
        (categories)=> {
            this.categories = categories
        }
    )
}
getCategories(){
    
    
    return this.categories
}

}