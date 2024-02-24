import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Add  from '@mui/icons-material/Add';
import { Box, FormControl,Stack, TextField } from '@mui/material';

const DealerAdd = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleChange = (
    ) => {
    };
  return (
    <React.Fragment>
        <Button variant="solid" color="primary" onClick={() => setOpen(true)}style={{width:150}} startDecorator={<Add />}>
        Add Dealer
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
                    Add New Dealer
                </Typography>
                <Stack spacing={2} maxWidth='md'>
                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { width: '21ch' },
                                }}
                                noValidate
                                autoComplete="on"
                            >
                                <TextField variant='outlined' 
                                    id="outlined-error-helper-text"
                                    label="Error"
                                    defaultValue="Hello World"
                                    helperText="Incorrect entry." />
                            </Box>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Shop Category' required></TextField>
                        </FormControl>
                    </Stack>
                    
                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='Address 1' required></TextField>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Address 2' required></TextField>
                        </FormControl>
                    </Stack>  
                    
                    
                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='Mobile No' required></TextField>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Alt Mobile No' required></TextField>
                        </FormControl>
                    </Stack> 
                    
                    
                    <Stack display={'flex'} direction={"row"} spacing={2}>
                        <FormControl>
                            <TextField variant='outlined' label='Area' required></TextField>
                        </FormControl>
                        <FormControl>
                            <TextField variant='outlined' label='Pincode' required></TextField>
                        </FormControl>
                    </Stack>  

                    

    
                    <Button type="submit" color='success' onChange={handleChange}>Submit</Button>
                </Stack>
                
            </Sheet>
        </Modal>
        </React.Fragment>
  )
}

export default DealerAdd