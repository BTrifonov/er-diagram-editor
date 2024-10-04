/**
 * Collection of functions for working with fields in entities
 */

import { EntityField } from "../types/entityTypes";

/**
 * Extract all fieldNames from the given entities
 * @param fields 
 * @returns 
 */
export function getFieldNames(fields: EntityField[]) {
    let fieldNames: string[] = [];

    fields.map((field)=>{
        fieldNames.push(field.fieldName);
    })
    
    return fieldNames;
}

/**
 * Extract all fieldTypes from the given entities
 * @param fields 
 */
export function getFieldTypes(fields: EntityField[]) {
    let fieldTypes: string[] = [];

    fields.map((field)=>{
        fieldTypes.push(field.fieldType)
    })

    return fieldTypes;
}

/**
 * Extract all field validate rules from the given fields
 * @param fields 
 * @returns 
 */
export function getFieldValidateRules(fields: EntityField[]): string[][] {
       // Initialize validateRules as an empty array
       let validateRules: string[][] = [];

       // Use map to extract fieldValidateRules from each field
       fields.map((field) => {
           if (field.fieldValidateRules && field.fieldValidateRules.length > 0) {
               // Push the field's validate rules into validateRules array
               validateRules.push(field.fieldValidateRules);
           } else {
               // If the field has no validation rules, push an empty array
               validateRules.push([]);
           }
       });
   
       return validateRules;
}