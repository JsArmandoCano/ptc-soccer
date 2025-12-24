import React from 'react'

const Players = () => {
    return (
        <section className="w-2/5 content-sections">
            <p className="text-xl font-medium text-secondary">Goleo Individual</p>

            <div className="fondo1 relative w-full h-20 flex items-center rounded-md mt-2 p-5">
                <img className="size-14 me-3.5" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1184px-Manchester_United_FC_crest.svg.png" alt="Logo Equipo" />
                <div className="flex flex-col">
                    <h4 className="text-[22px] text-white font-bold">Armando Cano</h4>
                    <p className="text-white">22 Goles</p>
                </div>

                <div className="absolute top-3 right-3 size-10 flex justify-center items-center bg-white rounded-full">
                    <p className="text-[20px] font-bold text-cyan-950">#1</p>
                </div>
            </div>

            <div className="w-full mt-2.5 flex flex-col" style={{ height: "200px", overflow: "auto" }}>
                <div className="w-full flex justify-between items-center p-3">
                    <div className="flex items-center gap-3">
                        <img className="size-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" alt="Logo Equipo" />
                        <div>
                            <h6 className="text-[16px] font-bold">Josue Valdez</h6>
                            <p className="text-[12px]">Bayer Munich</p>
                        </div>
                    </div>
                    <p className="text-[18px]">18 Goles</p>
                </div>

                <div className="w-full flex justify-between items-center p-3 bg-gray-50">
                    <div className="flex items-center gap-3">
                        <img className="size-9" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" alt="Logo Equipo" />
                        <div>
                            <h6 className="text-[16px] font-bold">Luis Hernandez</h6>
                            <p className="text-[12px]">Paris Saint-Germain</p>
                        </div>
                    </div>
                    <p className="text-[18px]">15 Goles</p>
                </div>

                <div className="w-full flex justify-between items-center p-3">
                    <div className="flex items-center gap-3">
                        <img className="size-9" src="https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png" alt="Logo Equipo" />
                        <div>
                            <h6 className="text-[16px] font-bold">Carlos Perez</h6>
                            <p className="text-[12px]">Barcelona</p>
                        </div>
                    </div>
                    <p className="text-[18px]">12 Goles</p>
                </div>

                <div className="w-full flex justify-between items-center p-3 bg-gray-50">
                    <div className="flex items-center gap-3">
                        <img className="size-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png" alt="Logo Equipo" />
                        <div>
                            <h6 className="text-[16px] font-bold">Miguel Torres</h6>
                            <p className="text-[12px]">Borussia Dortmund</p>
                        </div>
                    </div>
                    <p className="text-[18px]">10 Goles</p>
                </div>
            </div>
        </section>
    )
}

export default Players
