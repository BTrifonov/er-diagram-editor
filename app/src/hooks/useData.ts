import * as React from 'react'
import { Entity, EntityJSON, FieldJSON } from '../types/entityTypes';


/**
 * So far this functions works as expected
 * @returns  */

export function useData() {
    const [entities, setEntities] = React.useState<Entity[]>([]);

    React.useEffect(()=>{
        const fetchEntities = async () => {
            try {
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

                    setEntities(prevEntities => [...prevEntities, entity]);
                });
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchEntities();
    }, []); // Run only once on mount

    return entities;
}
