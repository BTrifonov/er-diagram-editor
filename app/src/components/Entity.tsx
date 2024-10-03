import * as React from 'react';
import { Box } from "@mui/material";
import EntityHeader from "./EntityHeader";
import EntityEntry from './EntityEntry';

export default function Entity({ data }: any) {
    /**
     * Entity header state
     */
    const [entityName, setEntityName] = React.useState<string>('');

    /**
     * Entity entry states for multiple entries
     */
    const [attributeKeys, setAttributeKeys] = React.useState<string[]>(Array(5).fill(''));
    const [attributeNames, setAttributeNames] = React.useState<string[]>(Array(5).fill(''));
    const [attributeTypes, setAttributeTypes] = React.useState<string[]>(Array(5).fill(''));

    const attributeCount = 5;
    const entityAttributes = [];

    const handleAttributeTypeChange = (index: number, newValue: string) => {
        // Copy the current attribute types and update the specific index
        const updatedAttributeTypes = [...attributeTypes];
        updatedAttributeTypes[index] = newValue;
        setAttributeTypes(updatedAttributeTypes);
    };

    const handleAttributeKeyChange = (index: number, newValue: string) => {
        const updatedAttributeKeys = [...attributeKeys];
        updatedAttributeKeys[index] = newValue;
        setAttributeKeys(updatedAttributeKeys);
    };

    const handleAttributeNameChange = (index: number, newValue: string) => {
        const updatedAttributeNames = [...attributeNames];
        updatedAttributeNames[index] = newValue;
        setAttributeNames(updatedAttributeNames);
    };

    for (let i = 0; i < attributeCount; i++) {
        entityAttributes.push(
            <EntityEntry
                key={i}
                attributeKey={attributeKeys[i]}
                setAttributeKey={(newValue: string) => handleAttributeKeyChange(i, newValue)}
                attributeName={attributeNames[i]}
                setAttributeName={(newValue: string) => handleAttributeNameChange(i, newValue)}
                attributeType={attributeTypes[i]}
                setAttributeType={(newValue: string) => handleAttributeTypeChange(i, newValue)}
            />
        );
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

            {entityAttributes}

        </Box>
    );
}
