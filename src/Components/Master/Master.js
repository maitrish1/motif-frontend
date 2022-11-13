import { Box } from "@mui/system";
import Eachmail from "./Eachmail";

function Master({ allEmails, OpenDrawer, closeDrawer, opened }) {
  return (
    <Box>
      {allEmails
        ? allEmails.map((each) => {
            return (
              <Box
                m={2}
                sx={{ cursor: "pointer", }}
                key={each.id}
                onClick={() => (opened === false ? OpenDrawer(each.id) : closeDrawer())}
              >
                
                <Eachmail eachMail={each} />
                
              </Box>
            );
          })
        : ""}
    </Box>
  );
}

export default Master;
