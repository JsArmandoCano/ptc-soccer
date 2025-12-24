import { Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'


const Details = ({ showDrawer }) => {
    return (
        <section className="w-1/2 content-sections">
            <p className="text-xl font-medium text-secondary">Detalles de la temporada</p>

            <div className="w-full flex flex-col">
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">N° de Canchas</p>
                    <p className="font-bold">5</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">Duración Total del Partido</p>
                    <p className="font-bold">40 min</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">Maximo de Equipos</p>
                    <p className="font-bold">30 equipos</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">Rango de edad</p>
                    <p className="font-bold">18 - 30 años</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">Limite de jugadores</p>
                    <p className="font-bold">8 - 16 jugadores</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">Fases del Torneo</p>
                    <p className="font-bold">P - T - C - S - F</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">¿Ida y Vuelta?</p>
                    <p className="font-bold">Si</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">Jornadas</p>
                    <p className="font-bold">28</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">¿Se permiten empates?</p>
                    <p className="font-bold">Si</p>
                </div>
                <div className="flex justify-between px-4 py-2 border-gray-300" style={{ borderBottomWidth: "1.5px" }}>
                    <p className="text-gray-600">¿Criterios de desempates?</p>
                    <p className="font-bold">Diferencia de goles</p>
                </div>
            </div>

            <div className="flex justify-center mt-4 gap-10">
                <Button ghost icon={<DeleteOutlined />} style={{ width: "140px", alignSelf: "center", color: "#0d9488", border: "1.5px solid #0d9488" }}>ELIMINAR</Button>
                <Button onClick={showDrawer} ghost icon={<EditOutlined />} style={{ width: "140px", alignSelf: "center", color: "#0d9488", border: "1.5px solid #0d9488" }}>EDITAR</Button>
            </div>
        </section>
    )
}

export default Details
