import React , {FC,useState} from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Add  from '@mui/icons-material/Add';
import { Form, Formik} from 'formik';
import * as Yup from "yup"
import "yup-phone"
import { Stack} from '@mui/material';
import Textfield from '../formsUi/TextField'
import ButtonWrapper from '../formsUi/Button'

interface FormValues{
    dname:string;
    dsCategory:string;
    address1:string;
    address2:string;
    pno:string;
    apno:string;
    area:string;
    pcode:string;
}

const initialValues:FormValues ={
    dname:"",
    dsCategory:"",
    address1:"",
    address2:"",
    pno:"",
    apno:"",
    area:"",
    pcode:"",
}

const phoneregex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = Yup.object().shape({
    dname:Yup.string()
        .min(4,'Too short')
        .max(20,"Too long")
        .required("Dealer Name Repuired"),
    dsCategory:Yup.string()
        .min(4,'Too short')
        .max(20,"Too long")
        .required("Category Required"),
    address1: Yup.string()
        .required("Address Required"),
    address2 : Yup.string(),
    area: Yup.string()
        .required("Area Required"),
    pcode: Yup.string()
        .required("Postal Code Required"),
    pno:Yup.string()
        .matches(phoneregex, "Phone number is invalid")
        .min(10,"Must be over 10 digits")
        .max(10,"Must be under 10 digits")
        .required("Phone Number is Required"),
    apno: Yup.string()
        .matches(phoneregex, "Phone number is invalid")
        .min(10,"Must be over 10 digits")
        .max(10,"Must be under 10 digits"),
})



const DealerAdd: FC<FormValues> = () => {
    const [open, setOpen] = useState<boolean>(false);
    
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
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        console.log(JSON.stringify(values));
                    }}
                
                >
                    <Form>
                        <Stack spacing={2} maxWidth={'md'}>
                            <Stack  direction={'row'} spacing={2} margin={2}>
                                <Textfield
                                    name='dname'
                                    label='Dealer Name'
                                    type='text'
                                />
                                <Textfield
                                    name='dsCategory'
                                    label='Shop Category'
                                    type='text'
                                />
                            </Stack>
                            <Stack  direction={'row'} spacing={2} margin={2}>
                                <Textfield
                                    name='address1'
                                    label='Address Line 1'
                                    type='text'
                                />
                                <Textfield
                                    name='address2'
                                    label='Address Line 2'
                                    type='text'
                                />
                            </Stack>
                            <Stack  direction={'row'} spacing={2} margin={2}>
                                <Textfield
                                    name='area'
                                    label='Area'
                                    type='text'
                                />
                                <Textfield
                                    name='pcode'
                                    label='Postal Code'
                                    type='text'
                                />
                            </Stack>
                            <Stack  direction={'row'} spacing={2} margin={2}>
                                <Textfield
                                    name='pno'
                                    label='Phone No'
                                    type='text'
                                />
                                <Textfield
                                    name='apno'
                                    label='Alt Phone No'
                                    type='text'
                                />
                            </Stack>
                            <ButtonWrapper>
                                Submit
                            </ButtonWrapper>

                        </Stack>
                    </Form>
                </Formik>
                
                
            </Sheet>
        </Modal>
        </React.Fragment>
  )
}

export default DealerAdd