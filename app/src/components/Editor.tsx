import { useState, useCallback } from 'react';
import {applyNodeChanges, ReactFlow, Controls, Background, NodeChange} from "@xyflow/react"
import Entity from './Entity';

import * as React from 'react';
import { Entity as EntityType } from '../types/entityTypes';
import { countEntitiesFromJSON, parseEntitiesFromJSON } from '../utils/entityGeneration';
import { createNodes } from '../utils/nodeGenerator';
import EntityFieldNode from './EntityFieldNode';
import { EntityNode } from './EntityNode';

const nodeTypes = {entity: EntityNode, entityField: EntityFieldNode};

export default function Editor() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [entityCount, setEntityCount]=React.useState<number>(0);
  const [entities, setEntities]=React.useState<EntityType[]>([]);
    
  //Count number of entities
  React.useEffect(()=>{
    async function countEntities() {
      const fetchedEntityCount = await countEntitiesFromJSON();
      setEntityCount(fetchedEntityCount);
    }
    
    countEntities();

    return () => {
      setEntityCount(0);
    }

  }, []);

  //Parse entities from JSON
  React.useEffect(()=>{
    async function parseEntities() {
      const entities = await parseEntitiesFromJSON();
      
      if(entities) {
        //console.log("Entities sent!");
        setEntities(entities);
        //console.log(entities);
      }
    }

    parseEntities();

    return () => {
      setEntities([]);
    }
  }, []);


  //Create react-flow nodes from entities
  React.useEffect(()=>{
    if(entities) {
      const nodes = createNodes(entities);
      setNodes(nodes);
    }

    return () => {
      setNodes([]);
    }
  }, [entities]);


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
