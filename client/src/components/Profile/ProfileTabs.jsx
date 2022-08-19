import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tweet from "../Main/components/Tweet";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
function ProfileTabs({ user, tweets, loading }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="Tweets" {...a11yProps(0)} />
          <Tab label="Media" {...a11yProps(1)} />
          <Tab label="Likes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <TabPanel value={value} index={0}>
            {tweets?.length > 0 ? (
              tweets.map((tweet) => {
                return <Tweet tweet={tweet} key={tweet._id} />;
              })
            ) : (
              <div className="nothing-in-timeline">Nothing to see yet!</div>
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </>
      )}
    </Box>
  );
}

export default ProfileTabs;
