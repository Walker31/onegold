import React from "react";
import Logo from '../../assets/react.svg'

const Navbar = () => {

    return <>

    <div>
        <div>
            <div>
                <div className="grid grid-flow-col grid-rows-3 ">

                </div>
                <div>
                    <a href="#">
                        <img src={Logo} alt="OneGold" />
                    </a>
                </div>

                <div>
                    <div className="group">
                        <input type="text" placeholder="search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
                        duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-2 focus:border-orange-400" />
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
    </>
}

export default Navbar;