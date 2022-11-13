import { pink } from '@mui/material/colors'
import React from 'react'
import { Avatar, Card, CardContent,Button } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Stack } from '@mui/system';

function Slave({body,emailID,markFavourite}) {
  return (
    <Card variant="outlined">
    <CardContent sx={{ display: "flex",gap:3, overflow:'scroll', flexDirection:'column' }}>
      <Stack direction='row' >
      <Avatar sx={{ bgcolor: pink[500] }}>
        A
      </Avatar>
      <Button color='primary' onClick={()=>markFavourite(emailID)}>Mark as Favourite</Button>
      </Stack>
    
      <ReactQuill modules={{toolbar:false}} readOnly={true} style={{width:'100%'}} theme="snow" value={body}  />
    </CardContent>
  </Card>
  )
}

export default Slave