import '../assets/fontawesome/css/solid.css'
import '../assets/fontawesome/css/fontawesome.css'


const Nav = () => {
    return (
        <nav className="h-[58px] bg-white flex items-center justify-between border-b border-b-black border-opacity-10">
            <div className="nav-left flex items-center">
                <span className="logo ml-[30px]">Zaman</span>
                {/* Vertical line */}
                <span className="h-[32px] w-px opacity-10 bg-black mx-[20px]"></span>
                {/* Vertical line */}
                <div className="boards flex">
                    <span>
                        <img className="w-[24px] h-[24px]" src="./trello-mark-blue.png" alt="" />
                    </span>
                    <span className="ml-[5px] font-poppins">Boards</span>
                </div>
                {/* Vertical line */}
                <span className="h-[32px] w-px opacity-10 bg-black mx-[20px]"></span>
                {/* Vertical line */}
                <div className="search h-[30px] w-[512px] bg-boz rounded-full flex justify-between items-center hidden lg:flex">
                    <input className="bg-inherit outline-none ml-[20px] w-4/5" type="text" />
                    <span className="mr-[20px]">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>
            <div className="nav-right flex">
                <div className="nav-icons hidden items-center sm:flex">
                    <span className="nav-icon">
                        <i className="fa-solid fa-circle-plus"></i>
                    </span>
                    <span className="nav-icon mx-[50px]">
                        <i className="fa-solid fa-circle-exclamation"></i>
                    </span>
                    <span className="nav-icon">
                        <i className="fa-solid fa-bell"></i>
                    </span>
                </div>
                <span className="profile-photo mx-[30px]">
                    <img className="w-[40px] h-[40px] border rounded-full" src="./huseyn.jpeg" alt="" />
                </span>
            </div>
        </nav>
    );
};

export default Nav;
