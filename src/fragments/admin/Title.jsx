import { Select } from 'antd';


const Title = ({ name }) => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };


    return (
        <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-cyan-800">{name}</h2>
            <Select
                placeholder="Selecciona un torneo"
                style={{ width: "20%" }}
                onChange={handleChange}
                options={[
                    { value: 'torneo1', label: 'Torneo 1' },
                    { value: 'torneo2', label: 'Torneo 2' },
                    { value: 'torneo3', label: 'Torneo 3' },
                ]}
            />
        </div>
    )
}

export default Title
