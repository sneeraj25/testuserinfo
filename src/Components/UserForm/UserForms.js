import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import { useState } from "react";
import moment from 'moment';


const UserForms = (props) => {
    const {userData,setUserData} = props;
    const [name, SetUserName] = useState("shubham");
    
    const [dob, SetDob] = useState(moment());
    const [age, SetAge] = useState("");
    const [gender,SetGender] = useState("");
    const [college, SetCollege] = useState("");

   




    const submitUserForm = () => {

        // console.log('user name' , name);
        // console.log('dob' , dob.format('DD/MM/YY'));
        // console.log('age' , age);
        // console.log('gender', gender);
        // console.log('college' , college);

        const newDob = dob.format('DD/MM/YY') ;
        const newUserObj = {name, dob:newDob, age,gender, college };

        // console.log('newUserObj', newUserObj);
        // console.log('userdata', userData);

        const newUserData = [
            ...userData,
            newUserObj
        ]
        console.log('newUserData',newUserData);
        setUserData(newUserData)
        
    }

    return(

       
            <Box>

                <Stack spacing ={2}>

                <TextField id="outlined-basic" label="name" variant="outlined" 
                value={name}
                onChange={(event) => {
                SetUserName(event.target.value)
                }} 
                />


                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker
                        label="Controlled picker"
                        value={dob}
                        onChange={(newValue) =>{ 
                            SetDob(newValue)
                            SetAge(moment().diff(newValue, 'year'))
                        } }
                    />
                    </DemoContainer>
                </LocalizationProvider>
                
                <TextField id="outlined-basic" value={age} label="Age" variant="outlined" />

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value = {gender}
                        onChange = {(event) =>
                            SetGender(event.target.value)
                        }
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <TextField id="outlined-basic" value={college} label="College" variant="outlined" 
                onChange ={(event)=> 
                    SetCollege(event.target.value)
                    } />

                <Button variant="contained" color="success" onClick={submitUserForm}>
                    Submit
                </Button>
                </Stack>
            </Box>
       
    

    
        

    )
};

export default UserForms;