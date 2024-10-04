/**
 * Utility functions for creating React flow nodes
 * React flow nodes are the visual elements of entities
 */

import { Entity } from "../types/entityTypes";

/**
 * TODO: Inspect why the type Node from react-flow is not accepted
 * as type for nodes
 * 
 * @param entities => Contain data such as entity name
 * @returns => React flow nodes for each Entity in the array
 */
export function createNodes(entities: Entity[]) {
    let nodes: any[] = [];
   
    let id: number = 0;
    let posX: number = 0;
    let posY: number = 0;
  
    entities.forEach((entity)=>{
      nodes.push({
        id: id.toString(),
        position: {
          x: posX+=400,
          y: posY
        },
        type: 'entity', 
        data: {entity}
      })
  
      id+=1;
    })
  
    return nodes;
  }