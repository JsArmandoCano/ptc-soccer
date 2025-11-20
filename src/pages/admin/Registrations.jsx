import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../fragments/admin/Title'


const Registrations = () => {
    return (
        <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                <Title name={"INSCRIPCIONES"} />

                <p>Inscribir equipo</p>
                <p>Aceptar equipo</p>
                <p>Aceptar jugador</p>
                <p>Abrir inscripciones</p>
                <p>Cerrar inscripciones</p>
                <p>Estadisticas de inscripciones</p>
            </div> 
        </>
    )
}

export default Registrations
