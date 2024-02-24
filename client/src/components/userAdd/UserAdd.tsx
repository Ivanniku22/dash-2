import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Add  from '@mui/icons-material/Add';
import { FormControl,Stack, TextField } from '@mui/material';
import Select , { selectClasses }from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { KeyboardArrowDown } from '@mui/icons-material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UserAdd = () => {
  const [open, setOpen] = React.useState<boolean>(false);
    const handleChange = (
    ) => {
    };
    return (
        <React.Fragment>
        <Button variant="solid" color="primary" onClick={() => setOpen(true)}style={{width:150}} startDecorator={<Add />}>
        Add User
        </Button>
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent:"center", alignItems: 'center'}}
        >
            <Sheet
            variant="outlined"
            sx={{
                maxWidth: 780,
                borderRadius: 'md',
                p: 3,
                boxShadow: 'lg',
            }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    Add New User
                </Typography>
                <Stack spacing={2} maxWidth='md'>
                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='First Name' required></TextField>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Last Name' required></TextField>
                        </FormControl>
                    </Stack> 

                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <Select 
                                placeholder='Choose a Gender' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
                                variant='outlined'
                                sx={{
                                        width: 210,
                                        height:55,
                                        [`& .${selectClasses.indicator}`]: {
                                        transition: '0.2s',
                                        [`&.${selectClasses.expanded}`]: {
                                            transform: 'rotate(-180deg)',
                                        },
                                        },
                                    }}
                                required
                            >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select 
                                placeholder='Role' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
                                variant='outlined'
                                sx={{
                                        width: 210,
                                        height:55,
                                        [`& .${selectClasses.indicator}`]: {
                                        transition: '0.2s',
                                        [`&.${selectClasses.expanded}`]: {
                                            transform: 'rotate(-180deg)',
                                        },
                                        },
                                    }}
                                required
                            >
                                <Option value="Male">Admin</Option>
                                <Option value="Female">Manager</Option>
                                <Option value="Female">Sales Person</Option>
                                <Option value="Female">Accountant</Option>
                            </Select>
                        </FormControl>
                    </Stack>             

                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Date of Birth" sx={{width:210}} format='DD-MM-YYYY'/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                        <FormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Date of Joining" sx={{width:210}} format='DD-MM-YYYY'/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Stack> 

                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <Select 
                                placeholder='Blood Group' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
                                variant='outlined'
                                sx={{
                                        width: 210,
                                        height:55,
                                        [`& .${selectClasses.indicator}`]: {
                                        transition: '0.2s',
                                        [`&.${selectClasses.expanded}`]: {
                                            transform: 'rotate(-180deg)',
                                        },
                                        },
                                    }}
                                required
                            >
                                <Option value="A+">A+</Option>
                                <Option value="A-">A-</Option>
                                <Option value="B+">B+</Option>
                                <Option value="B-">B-</Option>
                                <Option value="AB+">AB+</Option>
                                <Option value="AB-">AB-</Option>
                                <Option value="O+">O+</Option>
                                <Option value="O-">O-</Option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Email' type='email' ></TextField>
                        </FormControl>
                    </Stack>

                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='Address Line 1' type='text'></TextField>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Address Line 2' type='text'></TextField>
                        </FormControl>
                    </Stack>

                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='Phone No'></TextField>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Alt Phone No'></TextField>
                        </FormControl>
                    </Stack>
                    
                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <Select 
                                placeholder='City' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
                                variant='outlined'
                                sx={{
                                        width: 210,
                                        height:55,
                                        [`& .${selectClasses.indicator}`]: {
                                        transition: '0.2s',
                                        [`&.${selectClasses.expanded}`]: {
                                            transform: 'rotate(-180deg)',
                                        },
                                        },
                                    }}
                                required
                            >
                                <Option value="chennai">Chennai</Option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select 
                                placeholder='State' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
                                variant='outlined'
                                sx={{
                                        width: 210,
                                        height:55,
                                        [`& .${selectClasses.indicator}`]: {
                                        transition: '0.2s',
                                        [`&.${selectClasses.expanded}`]: {
                                            transform: 'rotate(-180deg)',
                                        },
                                        },
                                    }}
                                required
                            >
                                <Option value="tamilnadu">TamilNadu</Option>
                            </Select>
                        </FormControl>
                    </Stack>

                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <Select 
                                placeholder='Country' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
                                variant='outlined'
                                sx={{
                                        width: 210,
                                        height:55,
                                        [`& .${selectClasses.indicator}`]: {
                                        transition: '0.2s',
                                        [`&.${selectClasses.expanded}`]: {
                                            transform: 'rotate(-180deg)',
                                        },
                                        },
                                    }}
                                required
                            >
                                <Option value="india">India</Option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Postal Code'></TextField>
                        </FormControl>
                    </Stack>

                    <Button type="submit" color='success'>Submit</Button>
                </Stack>
                
            </Sheet>
        </Modal>
        </React.Fragment>
    )
}

export default UserAdd