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

/**
 * (Schema options: { partial: true })
 */
export interface StudentsPartial { 
    surname?: string;
    id?: number;
    name?: string;
    personalIdentificationNumber?: string;
    birthPlace?: string;
    postalCode?: string;
    town?: string;
    street?: string;
    buildingNumber?: string;
    flatNumber?: string;
    mobileNumber?: string;
    email?: string;
    courseCategory?: string;
    theoryStartDate?: string;
    practiceStartDate?: string;
    internalExamDate?: string;
    placeOfTraining?: boolean;
    archived?: boolean;
    stateRegulator?: string;
    instructorsId?: number;
    coursesId?: number;
}