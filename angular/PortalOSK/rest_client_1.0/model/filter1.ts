/**
 * LoopBack Application
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { CategoriesFields } from './categoriesFields';


export interface Filter1 { 
    where?: any;
    fields?: CategoriesFields;
    offset?: number;
    limit?: number;
    skip?: number;
    order?: Array<string>;
}