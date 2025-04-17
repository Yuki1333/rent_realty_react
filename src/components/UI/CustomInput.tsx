import { CustomInputProps } from '@models/UI/CustomInputProps';

const CustomInput: React.FC<CustomInputProps> = ({label, type='text', className='', value, onChange, placeholder='Введите данные...', wrapClassName='', ...props}) =>{
    return (
        <div className={`form-group ${wrapClassName}`}>
            { label && <label className="block text-sm mb-1">{label}</label> }
            <input  type={type}
                className={`w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                value={value}
                onChange={ (e) => { onChange?.(e) } } 
                placeholder={placeholder}
                {...props}
                />
        </div>
    )
}
export default CustomInput;