import { Paper, Typography } from "@mui/material"
import  '../Style/Page.css'
function Page(){
    return(
        <>
            <Paper className="defiut" elevation={3} >
                <Paper className="paegdiv" elevation={6} >
                    <Typography variant="h5" >Page 404 Not Found</Typography>
                </Paper>
            </Paper>
        </>
    )
}
export default Page