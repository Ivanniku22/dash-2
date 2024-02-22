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
                >
                    Add New User
                </Typography>
                <Stack spacing={2} maxWidth='md'>
                    <Stack display={'flex'} direction={"row"} spacing={2}>

                        <FormControl>
                            <Select 
                                placeholder='Choose a Category' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
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
                            >
                                <Option value="2 Wheeler">2 Wheeler</Option>
                                <Option value="4 Wheeler">4 Wheeler</Option>
                                <Option value="UPS">UPS</Option>
                                <Option value="Hubs">Hubs</Option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Part No' required ></TextField>
                        </FormControl>
                    </Stack>

                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='Short Part No' required></TextField>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Battery AH' required/>
                        </FormControl>
                    </Stack>


                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='Dealer Price' required/>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='MRP Price' required/>
                        </FormControl>
                    </Stack>
                    
                    
                    <Stack display={'flex'} direction={"row"} spacing={2}>

                        <FormControl>
                            <TextField variant='outlined' label='Warrent Year' required/>
                        </FormControl>
                        
                        <FormControl>
                            <Select 
                                placeholder='Status' 
                                onChange={handleChange} 
                                indicator={<KeyboardArrowDown />}
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
                            >
                                <Option value="true">Active</Option>
                                <Option value="false">In Active</Option>
                            </Select>
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