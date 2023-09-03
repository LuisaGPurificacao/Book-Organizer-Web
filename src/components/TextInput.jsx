export default function TextInput({ label, id, ...props }) {
    return (
        <div className="flex flex-col flex-auto mt-3">
            <label htmlFor={id}>{label}</label>
            <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="text" {...props} id={id} />
        </div >
    )
}