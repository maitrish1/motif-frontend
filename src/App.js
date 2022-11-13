import { Box, Stack, Typography } from "@mui/material";
import Master from "./Components/Master/Master";
import Slave from "./Components/Slave";
import { allEmails, fetchEmailBody } from "./Async/AllEmails";
import { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function App() {
  const [value, setValue] = useState(null);
  const [emailBody, setemailBody] = useState("");
  const [slavewidth, setslavewidth] = useState("0vw");
  const [masterwidth, setmasterwidth] = useState("100vw");
  const [opened, setopened] = useState(false);
  const [emailID, setemailID] = useState('')

  const handleDrawerOpen = async (id) => {
    const temp = await fetchEmailBody(id);
    setemailBody(temp.body);
    setslavewidth("45vw");
    setmasterwidth("50vw");
    setopened(true);
    allemails.map((each) => {
      if (each.id === id) {
        each.seen = true;
      }
    });
    setemailID(id)
    localStorage.setItem("Emails", JSON.stringify(allemails));

  };

  const handleDrawerClose = () => {
    setslavewidth("0vw");
    setmasterwidth("100vw");
    setopened(false);
  };
  const [allemails, setallemails] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("Loaded") === "True") {
      console.log(JSON.parse(localStorage.getItem("Emails")));
      setallemails(JSON.parse(localStorage.getItem("Emails")));
    } else AllEmailFunc();
  }, []);

  const AllEmailFunc = async () => {
    const temp = await allEmails();
    let temp1 = temp.map((each) => ({
      ...each,
      seen: false,
      favourite: false,
    }));
    setallemails(temp1);
    localStorage.setItem("Emails", JSON.stringify(temp1));
    localStorage.setItem("Loaded", "True");
  };

  const markFavourite = (id) => {
    console.log(id);
    allemails.map((each) => {
      if (each.id === id) {
        each.favourite = true;
      }
    });
    console.log(allemails)
    localStorage.setItem("Emails", JSON.stringify(allemails));
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === 0) {
        const read = JSON.parse(localStorage.getItem("Emails")).filter(
        (each) => each.seen === true
      );
      setallemails(read);
    }
    else if(newValue===1){
      const unread = JSON.parse(localStorage.getItem("Emails")).filter(
        (each) => each.seen === false
      );
      setallemails(unread);
    }
    else if(newValue===2){
      const fav = JSON.parse(localStorage.getItem("Emails")).filter(
        (each) => each.favourite === true
      );
      setallemails(fav);
    }
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex",position:'relative' }}>
      <Stack sx={{ width: `${masterwidth}` }}>
        <Stack direction="row" gap={2}>
          <Typography variant="subtitle1">Filter by : </Typography>
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction label="Read" />
            <BottomNavigationAction label="Unread" />
            <BottomNavigationAction label="Favourites" />
            
          </BottomNavigation>
        </Stack>

        <Master
          allEmails={allemails}
          OpenDrawer={handleDrawerOpen}
          closeDrawer={handleDrawerClose}
          opened={opened}
          
        />
      </Stack>
      <Stack sx={{ width: `${slavewidth}`, height: "100vh", pt: 2,position:'fixed', top:10, right:10 }}>
        <Slave emailID={emailID} body={emailBody} markFavourite={markFavourite}/>
      </Stack>
    </Box>
  );
}

export default App;
