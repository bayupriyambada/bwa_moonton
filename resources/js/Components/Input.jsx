import {useEffect, useRef } from 'react';


export default function Input({
    type = 'text',
    name,
    value,
    defaulValue,
    className,
    variant = 'primary',
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    })
    return (
        <input
            type={type}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className}`
            }
            name={name}
            ref={input}
            required={required}
            autoComplete={autoComplete}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            value={value}
        />
    );
}
