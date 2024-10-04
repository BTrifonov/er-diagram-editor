// Defines the structure for the fields within an entity
export interface FieldJSON {
    fieldName: string;
    fieldType: string;
    fieldValidateRules?: string[];  // Optional array of validation rules
}

// Defines the structure for an entity field
export interface EntityField {
    fieldName: string; 
    fieldType: string; 
    fieldValidateRules?: string[];
}

// Define the structure of an entity field props
export interface EntityFieldProps extends EntityField {
    setFieldName: (fieldName: string) => void, 
    setFieldType: (fieldType: string) => void, 
    setFieldValidateRules: (validateRules: string[]) => void
}


// Defines the structure for an entity including its fields
export interface Entity {
    name: string; 
    fields: EntityField[];
}

// Defines the structure for an enum
export interface Enum {
    name: string;
    values: string[];
}

// Defines the structure for a relationship
export interface Relationship {
    relationshipType: string;
    sourceEntity: string;
    targetEntity: string;
    relationshipName: string;
    otherEntityField?: string;  // Optional for defining relationships
    otherEntityRelationshipName?: string;  // Optional for many-to-many relationships
}

// Defines the entityJSON
export interface EntityJSON {
    name: string;
    fields: FieldJSON[];
    relationships?: Relationship[];
}

// Defines attributeTypeMenuProps
export interface AttributeTypeMenuProps {
    fieldType: string, 
    setFieldType: (fieldType: string) => void,
    disabled: boolean
}