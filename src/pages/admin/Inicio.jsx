import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../layout/Title'


const Inicio = () => {
    return (
        <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                <Title name={"INICIO"} />
            </div> 
        </>
    )
}

export default Inicio
