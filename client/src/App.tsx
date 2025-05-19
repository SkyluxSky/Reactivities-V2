import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const[activities, setActivities] = useState<Activity[]>([]); //linked to index.d.ts to create the type of array Activity[]

  //Utilize Axios Framework
  useEffect(() => {
    //Specify that we will get an activity array from our API from 5001
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

      //Test cleanup code
      return () => {}
  }, [])

  //<></> = Fragment
  return (
    <> 
      <div>
        <Typography variant='h3'>Reactivities</Typography>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>           
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}

export default App
