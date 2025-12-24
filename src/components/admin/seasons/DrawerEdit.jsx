import { Drawer, Input, Select, Button } from 'antd';

const DrawerEdit = ({ open, onClose }) => {

    const optionsPhases = [
        {label: "Pretemporada", value: "p"},
        {label: "Temporada", value: "t"},
        {label: "Repechaje", value: "r"},
        {label: "Dieciseisavos", value: "d"},
        {label: "Octavos", value: "o"},
        {label: "Cuartos", value: "c"},
        {label: "Semifinal", value: "s"},
        {label: "Tercer lugar", value: "3"},
        {label: "Final", value: "f"},
    ];

    const optionsDraw = [
        {label: "Si", value: "si"},
        {label: "No", value: "no"},
    ];

    const optionsReplay = [
        {label: "Diferencia de goles", value: "1"},
        {label: "Mejor ofenciva", value: "2"},
        {label: "Fair play", value: "3"},
        {label: "Mas partidos ganados", value: "4"},
        {label: "Goles", value: "5"},
    ];

    const handleChange = value => {
        console.log(value);
    };


    return (
        <Drawer
            title="Editar detalles de la temporada"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={open}
        >
            <div className="w-full">
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">N° de Canchas</p>
                    <Input />
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">Duración Total del Partido</p>
                    <Input />
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">Maximo de Equipos</p>
                    <Input />
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">Rango de edad</p>
                    <div className="flex gap-4">
                        <Input />
                        <Input />
                    </div>
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">Limite de jugadores</p>
                    <div className="flex gap-4">
                        <Input />
                        <Input />
                    </div>
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">Fases del Torneo</p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionsPhases}
                    />
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">¿Ida y Vuelta?</p>
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionsDraw}
                    />
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">N° de Jornadas</p>
                    <Input />
                </div>
                <div className="w-full mb-3.5">
                    <p className="text-[16px] mb-1.5">¿Se permiten empates?</p>
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionsDraw}
                    />
                </div>
                <div className="w-full mb-5">
                    <p className="text-[16px] mb-1.5">¿Criterios de desempates?</p>
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionsReplay}
                    />
                </div>
                <div className="w-full flex justify-center">
                    <Button ghost style={{ color: "#0d9488", border: "1.5px solid #0d9488" }}>GUARDAR</Button>
                </div>
            </div>
        </Drawer>
    )
}

export default DrawerEdit
