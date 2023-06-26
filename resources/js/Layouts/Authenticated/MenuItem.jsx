import { Link } from "@inertiajs/react";

export default function MenuItem({
    url,
    isActive,
    text,
    icon,
    method = "get",
}) {
    return (
        <Link
            href={url ? route(url) : null}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
}
