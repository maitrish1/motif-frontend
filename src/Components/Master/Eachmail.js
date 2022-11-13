import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import {  pink } from "@mui/material/colors";
import { Stack } from "@mui/system";
import moment from "moment";
import React from "react";

function Eachmail({ eachMail }) {
  var CurrentDate = moment().format("DD/MM/YYYY HH:MM");
  return (
    <Card variant="outlined">
      <CardContent sx={{ display: "flex",gap:3,bgcolor:`${eachMail.seen===true&&'#f2f2f2'}` }}>
        <Avatar sx={{ bgcolor: pink[500] }}>
          {eachMail.from_name.charAt(0)}
        </Avatar>
        <Box>
          <Stack alignItems="center" flexDirection="row">
            <Typography variant="subtitle2">From: </Typography>
            <Typography variant="subtitle1" noWrap> {eachMail.from_name}</Typography>
          </Stack>
          <Stack alignItems="center" flexDirection="row">
            <Typography variant="subtitle2">Subject:</Typography>
            <Typography variant="subtitle1" noWrap>{eachMail.subject}</Typography>
          </Stack>
          <Stack alignItems="center" flexDirection="row">
            <Typography variant="subtitle1" noWrap>
              {eachMail.short_description}
            </Typography>
          </Stack>
          <Stack alignItems="center" flexDirection="row">
            <Typography variant="subtitle1" noWrap>{CurrentDate}</Typography>
            {eachMail.favourite===true&&<Typography pl={2} color='primary'>Favourite</Typography>}            
          </Stack>
        </Box>
       
       
      </CardContent>
    </Card>
  );
}

export default Eachmail;
