import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../fragments/admin/Title'


const Teams = () => {
    return (
       <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                <Title name={"EQUIPOS"} />

                <p>Lista de Equipos</p>
                <p>Detalle del Equipo</p>
                <p>Lista de Jugadores</p>
                <p>Eliminar equipo</p>
                <p>Pagos al corriente</p>
                <p>Eliminar jugadores</p>
                <p>Contactar capitan</p>
                <p>Mensajes al equipo</p>
            </div> 
        </>
    )
}

export default Teams
