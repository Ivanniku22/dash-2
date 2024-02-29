import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'
import { FC } from 'react';

interface DateWrapperProps {
  name: string;
  label:string;
}

const DatePicker: FC<DateWrapperProps> = ({
    name,
    ...otherProps
}) => {

    const [field,meta] = useField(name)

    const configDatePicker: TextFieldProps  = {
        ...field,
        ...otherProps,
        type:'date',
        variant:'outlined',
        InputLabelProps:{
            shrink:true
        },
        sx:{width:210}
    }

    if(meta && meta.touched && meta.error){
        configDatePicker.error = true;
        configDatePicker.helperText = meta.error;
    }
  
    return (
    <TextField {...configDatePicker}/>
  )
}

export default DatePicker
