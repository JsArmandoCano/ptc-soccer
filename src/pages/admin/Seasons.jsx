import { useState } from 'react'
import '../../styles/admin/styles.css'
import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Title from '../../fragments/admin/Title'
import Positions from '../../components/admin/seasons/Positions'
import Players from '../../components/admin/seasons/Players'
import Details from '../../components/admin/seasons/Details'
import Time from '../../components/admin/seasons/Time'
import Statistics from '../../components/admin/seasons/Statistics'
import DrawerEdit from '../../components/admin/seasons/DrawerEdit'


const Seasons = () => {
    
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Header name={"Armando Cano"} rol={"Admin"} />
            <Navbar type={"1"} />

            <div className="absolute bottom-0 right-0 p-[20px]" style={{ width: "calc(100% - 90px)", height: "calc(100vh - 80px)", backgroundColor: "#EEEEEE", overflowY: "auto" }}>
                <Title name={"TEMPORADA"} />

                <div className="flex justify-between gap-5 mt-3.5">
                    <Positions />
                    <Players />
                </div>
                
                <div className="flex gap-5 mt-5">
                    <Details showDrawer={showDrawer} />
                    <Time />
                    <Statistics />
                    <DrawerEdit open={open} onClose={onClose} />
                </div>
            </div> 
        </>
    )
}

export default Seasons
