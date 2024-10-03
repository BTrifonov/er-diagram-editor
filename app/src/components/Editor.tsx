import { useState, useCallback } from 'react';
import { applyEdgeChanges, applyNodeChanges, addEdge, ReactFlow, Controls, Background, NodeChange, EdgeChange } from "@xyflow/react"
import Entity from './Entity';
import SelectNode from './SelectNode';


const nodeTypes = {entity: Entity, selectNode: SelectNode};

const initialNodes = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      type: 'entity',
      data: {}
    }
  ];
  

export default function Editor() {
    const [nodes, setNodes] = useState(initialNodes);

    const onNodesChange = useCallback(
        (changes: NodeChange<{ id: string; position: { x: number; y: number; }; type: string; data: {}; }>[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
      );

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <ReactFlow
                onNodesChange={onNodesChange}
                nodes={nodes} 
                nodeTypes={nodeTypes}
            >
            <Background />
            <Controls />
            </ReactFlow>
        </div> 
        
    )
}
