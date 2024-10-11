import * as React from 'react';
import { Box } from "@mui/material";
import EntityHeader from "./EntityHeader";
import EntityField from './EntityField';


import { Entity as EntityType } from '../types/entityTypes';
import { getFieldNames, getFieldTypes, getFieldValidateRules } from '../utils/fieldParser';
import { Handle,  Position, useUpdateNodeInternals } from '@xyflow/react';

interface EntityData {
    entity: EntityType
}

//TODO: Read react flow documentation to determine why do we need isConnectabl
interface EntityProps {
    id: string,
    isConnectable:boolean,
    data: EntityData
}

const handleStyle = { left: 10 };

export default function Entity({ id, data, isConnectable }: EntityProps) {
    const updateNodeInternals = useUpdateNodeInternals();
    
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

    let offsetX = 0;
    const entityFieldCount = data.entity.fields.length;

    // Assume the entity header takes first 10 percentage height
    const iterationStep = 90 / entityFieldCount;
   

    data.entity.fields.forEach((field, index)=>{
            entityFields.push(
                    <EntityField
                        key={index}
                        
                        fieldName={fieldNames[index]}
                        setFieldName={(newValue: string)=> handleFieldNameChange(index, newValue)}
    
                        fieldType={fieldTypes[index]}
                        setFieldType={(newValue: string)=> handleFieldTypeChange(index, newValue)}
    
                        fieldValidateRules={fieldValidateRules[index]}
                        setFieldValidateRules={()=>{return}}
                    >
                    </EntityField>
            )
            
        })

    React.useEffect(() => {
        updateNodeInternals(id);
    }, []);
    



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
                minWidth: '450px',

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
