import { NavLink } from 'react-router-dom';

const BannerItem = () =>{
    return (
        <NavLink to="/?cat_id=123" className="w-1/2 block grow-1">
            <div className="relative w-full h-64">
            <img 
                src="https://placehold.co/600x400" 
                alt="Banner 1" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            </div>
        </NavLink>
    )
}

export default BannerItem;