import {useEffect, useRef } from 'react';
import propTypes from "prop-types";

Input.propTypes = {
    type: propTypes.oneOf(["text", "number", "password", "email", "file"]),
    name: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    defaulValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
    className: propTypes.string,
    variant: propTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: propTypes.string,
    required: propTypes.bool,
    isFocused: propTypes.bool,
    handleChange: propTypes.func,
    placeholder: propTypes.string,
    isError: propTypes.bool,
};
export default function Input({
    type = "text",
    name,
    value,
    defaulValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    });
    return (
        <input
            type={type}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className}`}
            name={name}
            ref={input}
            defaultValue={defaulValue}
            required={required}
            autoComplete={autoComplete}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            value={value}
        />
    );
}
