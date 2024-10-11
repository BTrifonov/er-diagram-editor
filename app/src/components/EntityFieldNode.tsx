import { Handle, Position } from "@xyflow/react";
import { EntityField as EntityFieldType } from "../types/entityTypes";
import EntityField from "./EntityField";
import { Box } from "@mui/material";

interface EntityFieldNodeProps {
    id: string, 
    parentId?: string | undefined, 
    data: EntityFieldType, 
    isConnectable: boolean
}


/**
 * React flow node component, encapsulating the component, holding entity field data
 * @param param0 
 * @returns 
 */
export default function EntityFieldNode({id, parentId, data, isConnectable}: EntityFieldNodeProps)  {
    
    const leftHandleId: string = `source-handle-${parentId}-${id}`.toString()
    const rightHandleId: string = `target-handle-${parentId}-${id}`.toString()


    //TODO: Does setting isConnectable to true lead to side effects?
    return (
        <>
            <Handle
                id={leftHandleId}
                type='source'
                position={Position.Left}
                isConnectable={isConnectable} 
            >
            </Handle>
            <EntityField
                fieldName={data.fieldName}
                setFieldName={()=>console.log("Set field name triggered!")}

                fieldType={data.fieldType}
                setFieldType={()=>console.log("Set field type triggered!")}

                fieldValidateRules={data.fieldValidateRules}
                setFieldValidateRules={()=>console.log("Set field validate rules triggered!")}
            >

            </EntityField>
            <Handle
                id={rightHandleId}
                type='target'
                position={Position.Right}
                isConnectable={isConnectable}
            >
            </Handle>
        </>
    )
} 