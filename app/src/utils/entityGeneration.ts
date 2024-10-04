import { Entity, EntityJSON, FieldJSON } from "../types/entityTypes";

/**
 * Count number of entities in the local er-data.json file
 * @returns 
 */
export const countEntitiesFromJSON = async function() {
    try {
        const response = await fetch('er-data.json');
        const json = await response.json();

        const entities = json['entities'];
        const count = entities.length;
        console.log(count);
        
        return count;
    } catch(error) {
        console.log('Error, while counting entities from local file: ' + {error});
    }
}

/**
 * Parse entities from the local er-data.json file
 * TODO: Check what type of return value should the function be
 */
export const parseEntitiesFromJSON = async function() {
    try {
        const entities: Entity[] = [];
        const response = await fetch('er-data.json');
        const json = await response.json();

        const entitiesJSON = json['entities'];

        // Iterate through the entities from the JSON
        entitiesJSON.forEach((entityJSON: EntityJSON) => {
        const fields = entityJSON['fields'].map((field: FieldJSON) => ({
            fieldName: field.fieldName,
            fieldType: field.fieldType,
            fieldValidateRules: field.fieldValidateRules || []
        }));

        const entity: Entity = {
            name: entityJSON['name'],
            fields: fields
        };

        entities.push(entity);
    });

        return entities;
    }catch(error) {
        console.log('Error, while parsing the elements')
    }
}