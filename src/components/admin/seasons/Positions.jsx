import { Table } from 'antd';


const columns = [
    {
        title: 'Club',
        dataIndex: 'club',
        key: 'club',
        render: (text, record) => {
            return (
                <div className="flex items-center">
                    <img
                        src={record.logo}
                        alt={text}
                        className="size-6.5 object-cover"
                    />
                    <span className="ml-2 text-[15px]">{text}</span>
                </div>
            )
        }
    },
    {
        title: 'PJ',
        dataIndex: 'pj',
        key: 'pj',
        width: 55,
        align: 'center',
    },
    {
        title: 'G',
        dataIndex: 'g',
        key: 'g',
        width: 55,
        align: 'center',
    },
    {
        title: 'E',
        dataIndex: 'e',
        key: 'e',
        width: 55,
        align: 'center',
    },
    {
        title: 'P',
        dataIndex: 'p',
        key: 'p',
        width: 55,
        align: 'center',
    },
    {
        title: 'DG',
        dataIndex: 'dg',
        key: 'dg',
        width: 55,
        align: 'center',
    },
    {
        title: 'PTS',
        dataIndex: 'pts',
        key: 'pts',
        width: 60,
        align: 'center',
        render: (text) => <span className="font-bold">{text}</span>,
    },
];

const data = [
    {
        key: '1',
        club: 'Manchester United',
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1184px-Manchester_United_FC_crest.svg.png",
        pj: 10,
        g: 6,
        e: 2,
        p: 2,
        dg: '12',
        pts: 20,
    },
    {
        key: '2',
        club: 'Real Madrid',
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Escudo_Real_madrid_1931.png",
        pj: 10,
        g: 5,
        e: 3,
        p: 2,
        dg: '8',
        pts: 18,
    },
    {
        key: '3',
        club: 'Paris Saint-Germain',
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
        pj: 10,
        g: 4,
        e: 4,
        p: 2,
        dg: '5',
        pts: 16,
    },
    {
        key: '4',
        club: 'Borussia Dortmund',
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
        pj: 10,
        g: 3,
        e: 5,
        p: 2,
        dg: '2',
        pts: 14,
    },
    {
        key: '5',
        club: 'Barcelona',
        logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png",
        pj: 10,
        g: 2,
        e: 4,
        p: 4,
        dg: '-3',
        pts: 10,
    },
    {
        key: '6',
        club: 'Bayern Munich',
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        pj: 10,
        g: 1,
        e: 3,
        p: 6,
        dg: '-10',
        pts: 6,
    },
    {
        key: '7',
        club: 'Inter Milan',
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNcUnb49zp7qriWxPGn8xTAYQAFvIKLddRA&s",
        pj: 10,
        g: 0,
        e: 2,
        p: 8,
        dg: '-14',
        pts: 2,
    }
    ,
    {
        key: '8',
        club: 'Manchester City',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
        pj: 10,
        g: 7,
        e: 2,
        p: 1,
        dg: '15',
        pts: 23,
    }
];


const Positions = () => {
    return (
        <section className="w-3/5 content-sections">
            <Table 
                columns={columns} 
                dataSource={data} 
                pagination={false}
                scroll={{ y: 280 }}
                className="custom-table-positions"
            />
        </section>
    )
}

export default Positions
