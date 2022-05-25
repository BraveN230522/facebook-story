// import React from 'react';
import { useField as getUseField } from 'formik';
import { useRef } from 'react';

// interface useFieldProps {
//     name: string;
// }

export const useField = (name: string) => {
    const [field, meta, helper] = getUseField(name);

    const latestRef = useRef({});

    // On every render save newest helpers to latestRef
    latestRef.current.setValue = helper.setValue;
    latestRef.current.setTouched = helper.setTouched;
    latestRef.current.setError = helper.setError;

    // On the first render create new function which will never change
    // but call newest helper function
    if (!latestRef.current.helper) {
        latestRef.current.helper = {
            setValue: (...args) => latestRef.current.setValue(...args),
            setTouched: (...args) => latestRef.current.setTouched(...args),
            setError: (...args) => latestRef.current.setError(...args),
        };
    }

    return { ...field, ...meta, ...latestRef.current.helper };
};
