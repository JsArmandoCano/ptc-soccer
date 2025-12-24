
const Statistics = () => {
    return (
        <section className="w-1/4 content-sections">
            <div className="w-full h-1/3 flex flex-col justify-center items-center p-2.5" style={{ borderBottom: "1px solid #eee" }}>
                <img className="size-12" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1184px-Manchester_United_FC_crest.svg.png" alt="Logo Equipo" />
                <p className="text-[16px] mt-1">Mejor Ofensiva</p>
                <h5 className="text-[20px] font-bold text-cyan-950">22 Goles</h5>
            </div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center p-2.5" style={{ borderBottom: "1px solid #eee" }}>
                <img className="size-12" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" alt="Logo Equipo" />
                <p className="text-[16px] mt-1">Mejor Defensiva</p>
                <h5 className="text-[20px] font-bold text-cyan-950">4 Goles</h5>
            </div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center p-2.5">
                <img className="size-12" src="https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png" alt="Logo Equipo" />
                <p className="text-[16px] mt-1">Fair Play</p>
                <div className="w-full flex">
                    <div className="w-1/2 text-center">
                        <h5 className="text-[20px] font-bold text-cyan-950">18 Amarillas</h5>
                    </div>
                    <div className="w-1/2 text-center">
                        <h5 className="text-[20px] font-bold text-cyan-950">6 Rojas</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics
