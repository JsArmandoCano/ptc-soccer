import { AiOutlineDashboard } from "react-icons/ai"
import { TbSoccerField } from "react-icons/tb"
import { GiSoccerBall } from "react-icons/gi"
import { FaUsers } from "react-icons/fa"
import { LiaClipboardListSolid } from "react-icons/lia"
import { GiWhistle } from "react-icons/gi"
import { AiOutlineSound } from "react-icons/ai"
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
        name: "Temporadas",
        icon: <GiSoccerBall />,
        url: "/admin/user",
    },
    {
        id: 3,
        name: "Partidos",
        icon: <TbSoccerField />,
        url: "/admin/user",
    },
    {
        id: 4,
        name: "Equipos",
        icon: <FaUsers />,
        url: "/admin/user",
    },
    {
        id: 5,
        name: "Inscripciones",
        icon: <LiaClipboardListSolid />,
        url: "/admin/user",
    },
    {
        id: 6,
        name: "Árbitros",
        icon: <GiWhistle />,
        url: "/admin/user",
    },
    {
        id: 7,
        name: "Avisos",
        icon: <AiOutlineSound />,
        url: "/admin/user",
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