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
 * (Schema options: { title: 'NewPayments', exclude: [ 'id' ] })
 */
export interface NewPayments { 
    date: Date;
    amount: number;
    description?: string;
    paidBy: string;
    paidTo: string;
    studentsId?: number;
}