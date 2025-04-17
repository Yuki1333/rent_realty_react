import {BtnProps} from '@models/UI/BtnProps';

const Btn: React.FC<BtnProps> = ({ children, className='', type = 'button', onClick, ...props }) =>{
    return (
        <button {...props} 
                type={type} 
                className={`w-full font-bold py-2 px-6 shadow-md rounded-xl transition ${className}`}
                onClick={ (e) => { onClick?.(e) }}>{children}</button>
    )
}
export default Btn;