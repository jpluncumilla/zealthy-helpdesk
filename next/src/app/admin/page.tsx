import { Box, Card, CardContent, Typography } from "@mui/material"
import Dropdown from "./dropdown"
import '../page.module.css'


export default async function Admin() {

    const res = await fetch('https://zealthy-helpdesk-server.vercel.app/helpdesk', { next: { revalidate: 0 } })
    const data = await res.json()

  return (
    <div className="centered-container">
        <h2>Admin Panel</h2>
      {data.map((e: any) => (
        <Box sx={{ width: '50%' }}>
        <Card key={e._id as string} sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Name: {e.name as string}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              E-mail: {e.email as string}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Description: {e.description as string}
            </Typography>
            <Dropdown id={e._id} status={e.status} />
          </CardContent>
        </Card>
        </Box>
      ))}
    </div>
  )
}
