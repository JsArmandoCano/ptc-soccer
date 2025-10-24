import { Select } from 'antd';


const Title = ({ name }) => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };


    return (
        <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-cyan-800">{name}</h2>
            <Select
                placeholder="Selecciona una liga"
                style={{ width: "20%" }}
                onChange={handleChange}
                options={[
                    { value: 'liga1', label: 'Liga 1' },
                    { value: 'liga2', label: 'Liga 2' },
                    { value: 'liga3', label: 'Liga 3' },
                ]}
            />
        </div>
    )
}

export default Title
