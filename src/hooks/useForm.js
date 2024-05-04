import { useState } from "react";


const handelOnChange = (e, formData, setFormData) =>{

    const{name, value} = e.target;

    setFormData({
        ...formData,
        [name]:value,
    })
}

const useForm = (initialFormData) =>{

    const [formData, setFormData] = useState(initialFormData)

    return{
        handleOnChange: (e) => handelOnChange(e, formData, setFormData),
        setFormData,
        formData,
    }
}


export default useForm