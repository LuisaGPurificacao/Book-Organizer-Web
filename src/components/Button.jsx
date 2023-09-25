import Link from "next/link"

export default function Button({ children, icon, variant = "primary", element = "link", ...props }) {
    const styles = {
        primary: "flex gap-1 items-center px-5 py-2 bg-pink-500 text-white rounded",
        secondary: "flex gap-1 items-center px-5 py-2 border border-2 border-indigo-200 rounded"
    }

    const variantClass = styles[variant]

    return (
        <>
            {element === "link" ?
                <Link href="#" {...props} className={variantClass}>
                    {icon}
                    {children}
                </Link>
                :
                <div className={variantClass} >
                    {icon}
                    <input type="submit" value={children} {...props}/>
                </div>
            }
        </>
    )
}