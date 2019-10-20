import React, { useState } from 'react';
const useForm = (callback) => {
    const [values, setValue] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    };
    const handleChange = (event) => {
        event.persist();
        setValue(values => ({ ...values, [event.target.name]: event.target.value }));
    }
    return {
        handleChange,
        handleSubmit,
        values
    }
};
export default useForm;