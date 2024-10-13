import { useCallback } from 'react';
import {applyNodeChanges, ReactFlow, Controls, Background, NodeChange} from "@xyflow/react"

import * as React from 'react';
import { parseEntitiesFromJSON } from '../utils/entityGeneration';

import EntityFieldNode from './EntityFieldNode';
import { EntityNode } from './EntityNode';
import { createNodes } from '../utils/nodeGenerator';

const nodeTypes = {entity: EntityNode, entityField: EntityFieldNode};


//TODO: Improve the logic of fetching data
//TODO: Ensure that once data is fetched nodes are rendered
export default function Editor() {
  //all entities fetched from the local JSON file
  //const [entityData, setEntityData] = React.useState<EntityType[]>([]);

  //While entityData is fetched, do not display anything
  const [loading, setLoading] = React.useState<boolean>(true);

  const [entityNodes, setEntityNodes] = React.useState<any[]>([]);

  //TODO: Do I even need useState for entities...?

  //Parse entities from JSON
  React.useEffect(()=>{
    async function fetchEntities() {
      try {
        const entities = await parseEntitiesFromJSON();

        return entities;
      } catch(error) {
        console.log(`Following error, while fetching entity data:${error}`);
      }
    }

    fetchEntities()
      .then((entities)=>{
        if(entities && entities.length > 0) {
          console.log(entities);
          
          setEntityNodes(createNodes(entities));
          
          console.log(entityNodes);

          setLoading(false);
        }
      });

    //clean on unmount
    return ()=>{
      setEntityNodes([]);
    }
  }, []);

  //-------------------------------------------------
  // React flow component logic
  //-------------------------------------------------
  //TODO: Here one could be more precise in the type of the changes
  const onNodesChange = useCallback(
      (changes: any) => setEntityNodes((nds:any) => applyNodeChanges(changes, nds)),
      [],
  );

  return (
    loading ? 
    <div>Loading...</div> 
    : 
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow onNodesChange={onNodesChange} nodes={entityNodes} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
