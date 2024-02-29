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
import Select from '../formsUi/Select'
import ButtonWrapper from '../formsUi/Button'
import batteryCategoryOptions from '../../data/batteryCategoryOptions.json'
import statusOptions from '../../data/statusOptions.json'
interface FormValues{
    bcategory:string;
    partno:string;
    spartno:string;
    batteryAh:string;
    dprice:string;
    mrp:string;
    year:string;
    pstatus:string;
}

const initialValues: FormValues = {
    bcategory:'',
    partno:'',
    spartno:'',
    batteryAh:'',
    dprice:'',
    mrp:'',
    year:'',
    pstatus:'',
}

const validationSchema = Yup.object().shape({
    bcategory : Yup.string()
        .required("Battery Category Needed"),
    partno: Yup.string()
        .required("Part No Needed"),
    spartno: Yup.string()
        .required("Short Part No Needed"),
    batteryAh: Yup.string()
        .required("Battery AH Needed"),
    dprice: Yup.number()
        .required("Price is Required")
        .typeError("Please enter valid price"),
    mrp: Yup.number()
        .required("Price is Required")
        .typeError("Please enter valid price"),
    year: Yup.string()
        .required("Warranty Year Required"),
    pstatus: Yup.string()
        .required("Status is Required")
})

const ProductAdd: FC<FormValues> = () => {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <React.Fragment>
        <Button variant="solid" color="primary" onClick={() => setOpen(true)}style={{width:150}} startDecorator={<Add />}>
        Add Product
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
                    Add New Product
                </Typography>
                <Formik 
                    initialValues={initialValues}
                    onSubmit={values => {
                        console.log(JSON.stringify(values))
                    }}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <Stack spacing={2} maxWidth={'md'}>
                            <Stack direction={'row'} spacing={2} margin={2}>
                                <Select 
                                    name='bcategory'
                                    label='Choose a Category'
                                    options={batteryCategoryOptions}
                                />
                                <Textfield
                                    name='partno'
                                    label='Part No'
                                    type='text'
                                />
                            </Stack>
                            <Stack direction={'row'} spacing={2} margin={2}>
                                <Textfield
                                    name='spartno'
                                    label='Short Part No'
                                    type='text'
                                />
                                <Textfield
                                    name='batteryAh'
                                    label='Battery AH'
                                    type='text'
                                />
                            </Stack>
                            <Stack direction={'row'} spacing={2} margin={2}>
                                <Textfield
                                    name='dprice'
                                    label='Dealer Price'
                                    type='text'
                                />
                                <Textfield
                                    name='mrp'
                                    label='MRP Price'
                                    type='text'
                                />
                            </Stack>
                            <Stack direction={'row'} spacing={2} margin={2}>
                                <Textfield
                                    name='year'
                                    label='Warranty Year'
                                    type='text'
                                />
                                <Select 
                                    name='pstatus'
                                    label='Status'
                                    options={statusOptions}
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

export default ProductAdd