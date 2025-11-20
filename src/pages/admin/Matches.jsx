import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../fragments/admin/Title'


const Matches = () => {
    return (
        <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                <Title name={"PARTIDOS"} />

                <p>Lista de partidos</p>
                <p>Resultados</p>
                <p>Historial</p>
                <p>En vivo</p>
                <p>Agregar Partidos</p>
                <p>Jornadas</p>
                <p>Detalles del partido</p>
                <p>Modificar marcador</p>
                <p>Suspender partido</p>
                <p>¿Pago de albitraje?</p>
                <p>Asignar arbitro</p>
            </div> 
        </>
    )
}

export default Matches
