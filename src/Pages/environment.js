import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Environment(){
    var navigate = useNavigate();
   return (
    <Container>
        <Typography variant="h5"><b>Environment name</b></Typography>
        <Typography ><b>start url</b></Typography>
        <Stack direction="row-reverse" spacing={2}>
            <Button variant="contained" sx={{textTransform:"none", backgroundColor:"#0831ff"}} onClick={()=>{
                navigate('/runtestcase')
            }}><b>Run cases</b></Button>
            <Button variant="contained"  sx={{textTransform:"none" ,backgroundColor:"#0831ff"}} onClick={()=>{
                navigate('/addtestcase');
            }}><b>Add Test case</b></Button>
        </Stack>
        <Grid>
            
        </Grid>
    </Container>
   );
}