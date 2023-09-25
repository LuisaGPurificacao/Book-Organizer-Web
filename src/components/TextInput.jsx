export default function TextInput({ label, id, name, register = () => { }, ...props }) {
    return (
        <div className="flex flex-col flex-auto mt-3">
            <label htmlFor={id}>{label}</label>
            <input {...register(name)} className="bg-indigo-100 p-2 focus:outline-none rounded" type="text" {...props} id={id} />
        </div >
    )
}