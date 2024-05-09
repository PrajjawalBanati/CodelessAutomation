import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import Steeper from "../Pages/steeper"
const TestcaseRunningPage = () => {
    var navigate = useNavigate();
    return (
        <Container maxWidth="xl">
            <Typography variant="h4" align="center" padding={5}><b>Testcase Running Page</b></Typography>
            <Stack spacing={2}>
                <TextField disabled variant="outlined" fullWidth label="Testcase ID"><b></b></TextField>
                <TextField disabled variant="outlined" fullWidth label="Testcase Name"><b></b></TextField>
                <TextField disabled variant="outlined" fullWidth label="Description"><b></b></TextField>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<ReplayIcon/>}><b>Replay Steps</b></Button>
                </Stack>
                <Stack direction="row" spacing={6}>
                    <Steeper/>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width:'300vh' }} />
                </Stack>
                <Button variant="contained" onClick={()=>{
                    navigate('/environment')
                }}><b>Close</b></Button>
            </Stack>
        </Container>
    );
}

export default TestcaseRunningPage;