
/**
 * Basic prop for toggling between edit and visibiliy mode
 */
export interface ModeProps {
    editMode: boolean, 
    setEditMode: (editMode: boolean) => void;

    visibilityMode: boolean, 
    setVisibilityMode: (visibilityMode: boolean) => void;
}