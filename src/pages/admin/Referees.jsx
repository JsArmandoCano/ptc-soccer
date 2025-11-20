import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../fragments/admin/Title'


const Referees = () => {
    return (
        <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                <Title name={"ÁRBITROS"} />

                <p>Agregar arbitro</p>
                <p>Eliminar arbitro</p>
                <p>Suspender arbitro</p>
                <p>Editar arbitro</p>
                <p>Lista de arbitros</p>
                <p>Contacto arbitro</p>
                <p>Mensaje al arbitro</p>
            </div> 
        </>
    )
}

export default Referees
