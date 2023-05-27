const Input = ({ label, className, beginningIcon, endIcon, ...rest }) => {
    return (
        <div className="flex flex-col w-full">
            <label className={`mb-2 text-sm capitalize ${label === undefined && 'hidden'}`}>{label}</label>
            <div className="relative h-fit">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">{beginningIcon}</div>
                <input className={`${beginningIcon !== (null || undefined) ? 'pl-10' : ''} ${endIcon !== (null || undefined) ? 'pr-10' : ''} p-2 rounded-lg transition duration-200 border-[1.5px] border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 w-full ${className}`} {...rest} />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">{endIcon}</div>
            </div>
        </div>
    );
}

export default Input;
