import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'


const Inicio = () => {
    return (
        <>
            <Header name={"Armando Cano"} rol={"Árbitro"} />
            <Navbar type={"3"} />

            <div className="absolute bottom-0 right-0" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE" }}>
                
            </div> 
        </>
    )
}

export default Inicio
