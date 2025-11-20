import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../fragments/admin/Title'


const Home = () => {
    return (
        <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                <Title name={"INICIO"} />

                <p>Agregar un torneo</p>
                <p>Perfil del Admin</p>
                <p>Total de Equipos</p>
                <p>Total de Jugadores</p>
                <p>Total de arbitros</p>
                <p>Total de torneos</p>
                <p>Noticias de las temporadas</p>
                <p>Estatus de las temporadas</p>
            </div> 
        </>
    )
}

export default Home
