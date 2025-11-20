import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../fragments/admin/Title'


const Settings = () => {
    return (
        <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                <Title name={"AJUSTES"} />

                <p>Reglamento</p>
                <p>Avisos Web</p>
                <p>Comunicados a equipos</p>
                <p>Costo de inscripcion</p>
                <p>Costo de arbitraje</p>
                <p>Fechas de cada fase</p>
                <p>Organizacion del torneo</p>
            </div> 
        </>
    )
}

export default Settings
