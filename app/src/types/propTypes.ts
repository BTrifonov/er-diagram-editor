/**
 * All types, used for defining props
 */

import _default from "@emotion/styled"

/**
 * Defines FieldKeyMenuProps
 */
export interface FieldKeyMenuProps {
    fieldKey: string, 
    setFieldKey: (fieldKey: string)=>void,

    editMode: boolean, 
    setEditMode: (editMode: boolean)=>void
}

/**
 * Defines FieldNameMenuProps
 */
export interface FieldNameMenuProps {
    fieldName: string, 
    setFieldName: (fieldName: string)=>void, 

    editMode: boolean, 
    setEditMode: (editMode: boolean)=>void
}


// Defines FieldTypeMenuProps
export interface FieldTypeMenuProps {
    fieldType: string, 
    setFieldType: (fieldType: string) => void,
    
    editMode: boolean, 
    setEditMode: (editMode: boolean) => void
}

/**
 * Defines FieldValidateRulesMenuProps
 */
export interface FieldValidateRulesMenuProps {
    fieldValidateRules?: string[], 
    setFieldValidateRules: (validateRules: string[]) => void,

    editMode: boolean,
    setEditMode: (editMode: boolean) => void
}



