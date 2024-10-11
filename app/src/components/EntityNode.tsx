import { Entity } from "../types/entityTypes"
import EntityFieldNode from "./EntityFieldNode"
import React from "react";
import EntityHeader from "./EntityHeader";

interface EntityData {
    entity: Entity
}

interface EntityFlowNodeProps {
    id: string,
    data: EntityData,
    isConnectable: boolean
}

/**
 * React flow node component, encapsulating the component of an entity
 * @param param0 
 */
export function EntityNode({id, data, isConnectable}:EntityFlowNodeProps) {
    let entityFieldId: number = 0;
    const [entityCount, setEntityCount] = React.useState<number>(0);

    React.useEffect(()=>{
        if(data && data.entity && data.entity.fields)
            setEntityCount(data.entity.fields.length);
    }, []);

    //An EntityFlowNode comprises many EntityFieldNodes
    return (
        <>
            {
                data && data.entity && data.entity.fields &&
                    
                    <EntityHeader
                        entityName={data.entity.name}
                        setEntityName={()=>console.log("Set entity field name")}
                    >

                    </EntityHeader> 
                    
                    &&
                
                    data.entity.fields.map((field) => {
                        entityFieldId++;  // Incrementing entityFieldId in each iteration
                        return (
                            <EntityFieldNode
                                key={entityFieldId}  // It's also a good idea to use entityFieldId as the key
                                id={entityFieldId.toString()}
                                parentId={id}
                                data={field}
                                isConnectable={isConnectable}
                            />
                        );
                })   
            }
        </>
    )
}