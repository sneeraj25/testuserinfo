
import { Stack } from "@mui/system";

import UserForms from "../Components/UserForm/UserForms";
import UserTable from "../Components/UserTable/UserTable";
import { useState } from "react";

const UserInfo = () => {

const [userData, setUserData] = useState([]);



  return (
 
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={0.5}
      >
        <div>
          <UserForms userData = {userData} setUserData = {setUserData} />
        </div>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={0.5}
        >
          <UserTable userData={userData} />
        </Stack>
        
      </Stack>
   
  );
};

export default UserInfo;
