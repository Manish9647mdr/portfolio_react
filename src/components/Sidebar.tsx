import { IoLogoDribbble, IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io"

function Sidebar() {
    return (
        <div className="w-[90px]  border-r-[1px] h-screen fixed flex flex-col justify-around items-center">
            <h2 className="-rotate-90 tracking-widest">HOMEPAGE</h2>
            <div className="flex flex-col gap-7 mb-10 text-[20px]">
                <IoLogoGithub size={30} className="cursor-pointer hover:scale-110 translate-all ease-in-out" />
                <IoLogoYoutube size={30} className="cursor-pointer hover:scale-110 translate-all ease-in-out" />
                <IoLogoLinkedin size={30} className="cursor-pointer hover:scale-110 translate-all ease-in-out" />
                <IoLogoDribbble size={30} className="cursor-pointer hover:scale-110 translate-all ease-in-out" />
            </div>
        </div>
    )
}

export default Sidebar