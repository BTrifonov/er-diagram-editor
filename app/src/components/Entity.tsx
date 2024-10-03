import * as React from 'react';
import { Box } from "@mui/material";
import EntityHeader from "./EntityHeader";
import EntityEntry from './EntityEntry';


export default function Entity({data}:any) {
    //TODO: Through data could be fetched all relevant data from files
    let someData=data;

    /**
     * Entity header states
     */
    const [entityName, setEntityName] = React.useState<string>('');

    /**
     * Entity entry states
     */
    const [attributeKey, setAttributeKey] = React.useState<string>('');
    const [attributeName, setAttributeName] = React.useState<string>('');
    const [attributeType, setAttributeType] = React.useState<string>('');

    const attributeCount = 5;
    const entityAttributes=[];

    for(let i=0;i<5;i++) {
        entityAttributes.push(
            <EntityEntry
                key={i}
                attributeKey={attributeKey}
                setAttributeKey={setAttributeKey}

                attributeName={attributeName}
                setAttributeName={setAttributeName}

                attributeType={attributeType}
                setAttributeType={setAttributeType}
            />
        )
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
                transition: 'height 0.8s ease'
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