import { useState, useCallback } from 'react';
import { applyEdgeChanges, applyNodeChanges, addEdge, ReactFlow, Controls, Background, NodeChange, EdgeChange } from "@xyflow/react"
import Entity from './Entity';


const nodeTypes = {entity: Entity};

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

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <ReactFlow 
                nodes={nodes} 
                nodeTypes={nodeTypes}
            >
            <Background />
            <Controls />
            </ReactFlow>
        </div> 
        
    )
}
