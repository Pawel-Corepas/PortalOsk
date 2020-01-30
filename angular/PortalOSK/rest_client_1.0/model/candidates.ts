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
 */

export interface Candidates { 
    id?: number;
    surname: string;
    name: string;
    personalIdentificationNumber?: string;
    birhtPlace?: string;
    postalCode?: string;
    town?: string;
    street?: string;
    buildingNumber?: string;
    flatNumber?: string;
    mobileNumber: string;
    email: string;
    theoryStartDate?: Date;
    practiceStartDate?: Date;
    placeOfTraining?: string;
}