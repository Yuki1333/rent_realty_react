import { CustomCheckboxProps } from "@models/UI/CustomCheckboxProps";

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({label, id, checked, disabled = false, className='', wrapClassName='', onChange, ...props}) => {

    const inputId = `ch_${id}`;
    
    return (
        <div className={`flex items-center space-x-2 mb-1 ${wrapClassName}`}>
            <input 
                    type="checkbox" 
                    id={inputId} 
                    className={`h-4 w-4 text-blue-600 border-gray-300 rounded ${className}`} 
                    checked={checked} 
                    {...props} 
                    onChange={ (e) => onChange?.(e) }/>
            { label && <label htmlFor={inputId} className="text-sm text-gray-700">{label}</label> }
        </div>
    )
}

export default CustomCheckbox;