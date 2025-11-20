import { AiOutlineDashboard } from "react-icons/ai"
import { TbSoccerField } from "react-icons/tb"
import { GiSoccerBall } from "react-icons/gi"
import { IoTrophySharp } from "react-icons/io5"
import { FaUsers } from "react-icons/fa"
import { LiaClipboardListSolid } from "react-icons/lia"
import { GiWhistle } from "react-icons/gi"
import { FaGear } from "react-icons/fa6"
import { MdOutlineLogout } from "react-icons/md"

export const navAdmin = [
    {
        id: 1,
        name: "Inicio",
        icon: <AiOutlineDashboard />,
        url: "/admin/inicio",
    },
    {
        id: 2,
        name: "Torneos",
        icon: <IoTrophySharp />,
        url: "/admin/temporadas",
    },
    {
        id: 3,
        name: "Partidos",
        icon: <GiSoccerBall />,
        url: "/admin/partidos",
    },
    {
        id: 4,
        name: "Equipos",
        icon: <FaUsers />,
        url: "/admin/equipos",
    },
    {
        id: 5,
        name: "Inscripciones",
        icon: <LiaClipboardListSolid />,
        url: "/admin/inscripciones",
    },
    {
        id: 6,
        name: "Árbitros",
        icon: <GiWhistle />,
        url: "/admin/arbitros",
    },
    {
        id: 7,
        name: "Ajustes",
        icon: <FaGear />,
        url: "/admin/ajustes",
    },
    {
        id: 8,
        name: "Salir",
        icon: <MdOutlineLogout />,
        url: "/",
    },
]


export const navUsers = [
    {
        id: 1,
        name: "Inicio",
        icon: <AiOutlineDashboard />,
        url: "/user/inicio",
    },
    {
        id: 2,
        name: "Inicio",
        icon: <TbSoccerField />,
        url: "/user/user",
    },
]



export const navReferee = [
    {
        id: 1,
        name: "Inicio",
        icon: <AiOutlineDashboard />,
        url: "/referee/inicio",
    },
    {
        id: 2,
        name: "Inicio",
        icon: <FaUsers />,
        url: "/referee/user",
    },
]