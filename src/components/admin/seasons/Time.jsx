import { Flex, Steps } from 'antd'

const Time = () => {

    const items = [
        {
            title: 'PreTemporada',
            description: '01/05/2025',
            status: 'finish',
        },
        {
            title: 'Inicio de Temporada',
            description: '15/05/2025',
            status: 'finish',
        },
        {
            title: 'Temporada en Progreso',
            description: 'Jornada 10 de 30',
            status: 'process',
        },
        {
            title: 'Cuartos de Final',
            description: '15/12/2025',
            status: 'wait',
        },
        {
            title: 'Semifinales',
            description: '30/12/2025',
            status: 'wait',
        },
        {
            title: 'Final',
            description: '15/01/2026',
            status: 'wait',
        },
    ]

    return (
        <section className="w-1/4 content-sections">
            <p className="text-xl font-medium text-secondary">Estatus de la Liga</p>

            <Flex style={{ width: '100%', marginTop: 10, padding: "0 10px" }}>
                <Steps
                    direction="vertical"
                    progressDot
                    current={1}
                    items={items}
                />
            </Flex>
        </section>
    )
}

export default Time