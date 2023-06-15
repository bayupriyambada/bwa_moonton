import propTypes from "prop-types";

Button.propTypes = {
    type: propTypes.oneOf(["button", "submit", "reset"]),
    className: propTypes.string,
    variant: propTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    proccessing: propTypes.bool,
    children: propTypes.node,
};
export default function Button({
    className = "",
    children,
    variant = "primary",
    proccessing,
    type = "submit",
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                proccessing && "opacity-30"
            } btn-${variant} ${className}`}
        >
            {children}
        </button>
    );
}
