import { Box, ButtonGroup, IconButton } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ModeProps } from "../types/general";

export default function ModeSelector({
    editMode, setEditMode,
    visibilityMode, setVisibilityMode
}: ModeProps) {

    function triggerVisibilityMode() {
        setEditMode(false);
        setVisibilityMode(true)
    }

    function triggerEditMode() {
        setVisibilityMode(false);
        setEditMode(true);
    }


    return (
        <ButtonGroup
            orientation='horizontal'
            sx={{marginRight: '2%'}}
        >
            <IconButton
                size='small'
                onClick={triggerVisibilityMode}
            >
                <VisibilityIcon/>
            </IconButton>

            <IconButton 
                size='small'
                onClick={triggerEditMode}
            >
                <EditIcon/>
            </IconButton>
        </ButtonGroup>
    )
}