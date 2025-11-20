import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom'

import { navAdmin, navUsers, navReferee } from '../helpers/navData'


const Navbar = ({ type }) => {

    let data = null;
    if(type==="1") {
        data = navAdmin
    }
    else if(type==="2") {
        data = navUsers
    }
    else if(type==="3") {
        data = navReferee
    }

    return (
        <div className="w-[90px] bg-cyan-950" style={{ height: "calc(100vh - 80px)", overflowY: "auto" }}>
            <div className="w-full py-5 flex flex-col items-center gap-4">
                {data.map(item => (
                    <Tooltip placement="right" title={item.name}>
                        <NavLink key={item.id} to={item.url} className={({ isActive }) => isActive ? "size-[50px] flex justify-center items-center text-[28px] rounded-2xl bg-fuchsia-50" : "w-[50px] h-[50px] flex justify-center items-center text-[28px] rounded-2xl text-amber-50"}>
                            {item.icon}
                        </NavLink>
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}

export default Navbar
