import { CustomSelectProps } from "@models/UI/CustomSelectProps";

const CustomSelect: React.FC<CustomSelectProps> = ({label, defaultValue='Выбрать', value, options, onChange, required, disabled, className='', wrapClassName=''}) =>{
    return (
        <div className={`form-group ${wrapClassName}`}>
            { label && <label className="block text-sm mb-1">{label}:</label>}
            <select
            value={value}
            onChange={ (e) => { onChange?.(e) } } 
            className={`h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            required={required}
            disabled={disabled}
            >
                <option value="" disabled>{defaultValue}</option>
                {
                    options.map(item => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default CustomSelect;