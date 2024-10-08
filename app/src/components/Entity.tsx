import * as React from 'react';
import { Box } from "@mui/material";
import EntityHeader from "./EntityHeader";
import EntityEntry from './EntityEntry';


import { Entity as EntityType } from '../types/entityTypes';
import { getFieldNames, getFieldTypes, getFieldValidateRules } from '../utils/fieldParser';

interface EntityData {
    entity: EntityType
}

interface EntityProps {
    data: EntityData
}

export default function Entity({ data }: EntityProps) {
    /**
     * Entity header state
     */
    const [entityName, setEntityName] = React.useState<string>(data.entity.name);

    /**
     * Entity fields states
     */

    const [fieldNames, setFieldNames] = React.useState<string[]>(getFieldNames(data.entity.fields));
    const [fieldTypes, setFieldTypes] = React.useState<string[]>(getFieldTypes(data.entity.fields));
    const [fieldValidateRules, setFieldValidateRules] = React.useState<string[][]>(getFieldValidateRules(data.entity.fields));

    const entityFields: any[] = [];

    data.entity.fields.forEach((field, index)=>{
        entityFields.push(
            <EntityEntry
                key={index}
                
                fieldName={fieldNames[index]}
                setFieldName={(newValue: string)=> handleFieldNameChange(index, newValue)}

                fieldType={fieldTypes[index]}
                setFieldType={(newValue: string)=> handleFieldTypeChange(index, newValue)}

                fieldValidateRules={fieldValidateRules[index]}
                setFieldValidateRules={()=>{return}}
            >

            </EntityEntry>
        )
    })


    const handleFieldNameChange = (index: number, newValue: string) => {
        const updatedFieldNames = [...fieldNames];
        updatedFieldNames[index] = newValue;
        setFieldNames(updatedFieldNames);
    }

    const handleFieldTypeChange = (index: number, newValue: string) => {
        const updatedFieldTypes = [...fieldTypes];
        updatedFieldTypes[index] = newValue;
        setFieldTypes(updatedFieldTypes);
    }
    

    return (
        <Box
            sx={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '1px',

                minHeight: 'fit-content',
                minWidth: 'fit-content',

                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <EntityHeader
                entityName={entityName}
                setEntityName={setEntityName}
            />

            {entityFields}

        </Box>
    );
}
