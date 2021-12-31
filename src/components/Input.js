import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export default function Input(props) {
    switch (props.type) {
        case 'password':
            return (
                <div className="relative">
                    <div className="absolute inset-y-13 right-4 flex items-center pl-2">
                        {props.passwordShown ? 
                            <EyeOffIcon className="h-6text-navy-600" onClick={props.togglePasswordVisibility} /> :
                            <EyeIcon className="h-6 text-gray-600" onClick={props.togglePasswordVisibility} />
                        }
                    </div>
                    <label htmlFor={props.id} className="block text-md font-medium text-navy-600">{props.label}</label>
                    <input id={props.id} name={props.name} type={props.passwordShown ? "text" : "password"} autoComplete={props.autoComplete} placeholder={props.placeholder} 
                        className={`block w-full mt-1 px-5 py-3 text-base placeholder-gray-300 text-neutral-600 rounded-lg bg-gray-50
                                    transition duration-300 ease-in-out border-transparent 
                                    focus:border-transparent focus:ring-white focus:ring-offset-2 
                                    ${props.errors ? "border-red-500 focus:ring-offset-red-500" : "focus:ring-offset-navy-400"}`}
                        {...props.register}
                    />
                    <span className="text-red-400 font-medium">{props.errors?.message}</span>
                </div>
            );
        
        case 'checkbox':
            return (
                <div className="flex items-center">
                    <input id={props.id} name={props.name} type={props.type}
                        className="w-4 h-4 text-navy-400 border-gray-200 rounded
                                   transition duration-250 ease-in-out
                                   focus:ring-0 focus:ring-offset-0"
                    />
                    <label htmlFor={props.name} className="block ml-2 text-sm text-navy-900 select-none">{props.label}</label>
                </div>
            );

        default:
            return (
                <div>
                    <label htmlFor={props.id} className="block text-md font-medium text-navy-600">{props.label}</label>
                    <input id={props.id} name={props.name} type={props.type} autoComplete={props.autoComplete} placeholder={props.placeholder}
                        className={`block w-full mt-1 px-5 py-3 text-base placeholder-gray-300 text-neutral-600 rounded-lg bg-gray-50
                                    transition duration-300 ease-in-out border-transparent 
                                    focus:border-transparent focus:ring-white focus:ring-offset-2 
                                    ${props.errors ? "border-red-500 focus:ring-offset-red-500" : "focus:ring-offset-navy-400"}`}
                    {...props.register}/>
                    <span className="text-red-400 font-medium">{props.errors?.message}</span>
                </div>
            );
    }
}