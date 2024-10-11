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
   
    let idCounter: number = 0;
    let fieldIdCounter: number = 0;

    let posX: number = 0;
    let posY: number = 0;
  
    //TODO: Take into account the entity header
    entities.forEach((entity)=>{
      let entityFieldCount = entity.fields.length;

      //Assume each entity field (row) requires 200px height
      let entityNode = createFlowNode(idCounter.toString(), posX, posY, (entityFieldCount+1)*100, 500, 'entity', entity);
      
      //push entityNode to nodes
      nodes.push(entityNode);

      //reset entityFieldId
      fieldIdCounter = 0;

      //reset posY, start below the entity header
      posY = 100;

      //console log the data entity
      console.log(entityNode.data);

      entityNode.data.fields.forEach((field:any)=>{
        //Create a react flow node for each entity field
        //These notes should be children of the entity node

        const entityFieldId = `parent-${entityNode.id}-field-${fieldIdCounter.toString()}`
        let entityField = createFlowNode(entityFieldId, posX, posY+=100, 100, 500, 'entityField', field, idCounter.toString())

        //push the entity field
        nodes.push(entityField);

        //increment id counter
        fieldIdCounter+=1;
      })

      //increment the id counter for next entity
      idCounter+=1;

      //next entity shifted 500px to the right
      posX+=600;

    })
  
    return nodes;
  
  
  }



/**
 * Create a custom react flow node component
 * The component could be either a child or a parent component
 * Child components belong to parent components
 * @param id 
 * @param posX 
 * @param posY 
 * @param height 
 * @param width 
 * @param type 
 * @param data 
 * @param parentId 
 * @returns 
 */
export function createFlowNode(id: string, posX: number, posY: number, height: number, width: number, type: string, data: any, parentId?: string) {
  if(parentId){
    //Create a react parent flow component
    //Contains child react flow components
    //Should not be draggable
    return {
      parentId: parentId,
      id: id, 
      position: {
        x: posX, 
        y: posY
      }, 
      
      extend: 'parent',
      draggable: false,
      style: {
        height: height,
        width: width
      },

      type: type,

      data: data
    }
  }

  //Create a child react flow component
  return {
    id: id,
    position: {
      x: posX,
      y: posY
    },
    style: {
      height: height, 
      width: width
    },

    type:type,

    data:data
  }
}

