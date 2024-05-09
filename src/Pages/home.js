import { Container, Divider, Typography } from "@mui/material";
import Table from "./table";
import Link from "@mui/material/Link";
import AddEnvironment from "./addenvironment";
import Stack from "@mui/material/Stack";

export default function Home(){
    const columns = [
        {
          name: 'id',
          selector: row => row.id,
      },
        {
            name: 'Environment',
            sortable:true,
            selector: row => row.name,
            cell: (row) => (
              <div>
                <Link
                      component="button"
                      variant="body1"
                      underline="hover"
                      sx={{textTransform:'none'}}
                      onClick={(e) => {
                        e.preventDefault();
                            //   navigate(`/clients/${row.id}`,{state:{id:row.id}});
                      }}
                    >
                      <span style={{ color: '#202124', fontSize: '14px', fontWeight: 500 }}>{row.name}</span>
                    </Link>
                 
               
              </div>),
        },
        {
          name:'start url',
          selector: row => row.starturl,
    
        },
        {
          name:'Total cases',
          selector: row => row.totalcases,
        },
        {
            name:'Last passed',
            selector: row => row.totalcases,
          }
        
    ];

    return(<Container sx={{paddingTop:"20px"}}>
        <Typography variant="h4">Environments</Typography>
        <Stack direction="row-reverse">
        <AddEnvironment/>
      </Stack>
        <Divider sx={{paddingTop:"10px"}}/>
        <Table columns={columns}/>
    </Container>);
}