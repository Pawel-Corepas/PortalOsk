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
 */import { CoursesFields } from './coursesFields';
import { CoursesInclude } from './coursesInclude';


export interface Filter2 { 
    where?: any;
    fields?: CoursesFields;
    offset?: number;
    limit?: number;
    skip?: number;
    order?: Array<string>;
    include?: Array<CoursesInclude>;
}