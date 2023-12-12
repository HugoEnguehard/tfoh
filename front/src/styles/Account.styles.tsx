// Material imports
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const CustomGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '70%',

    margin: '50px 0 0 20px',
});

export const CustomGridRow = styled(Grid)({
    width: '100%',
    display: 'flex',
});

export const CustomGridColumn = styled(Grid)({
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
});
