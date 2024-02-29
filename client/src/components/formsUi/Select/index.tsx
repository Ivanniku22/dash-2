import {FC} from 'react'
import { TextField, TextFieldProps , MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';


interface SelectWrapperProps {
  name: string;
  options:{ [key: string]: string };
  label:string;
}

const SelectWrapper : FC<SelectWrapperProps> = ({
    name,
    options,
  ...otherProps
}) => {

    const {setFieldValue} = useFormikContext()
    const [field,meta] = useField(name)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        const {value} = evt.target;
        setFieldValue(name,value)
    }

    const configSelect: TextFieldProps = {
        ...field,
        ...otherProps,
        select:true,
        variant:'outlined',
        onChange: handleChange ,
        sx:{
            width:210,
        },
    }

    if(meta && meta.touched && meta.error){
        configSelect.error = true;
        configSelect.helperText = meta.error
    }


    return (
        <TextField {...configSelect}>
            {Object.keys(options).map((item,pos) =>{
                return(
                    <MenuItem key={pos} value={item} >
                        {options[item]}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}

export default SelectWrapper