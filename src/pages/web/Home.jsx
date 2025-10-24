import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="w-full h-dvh p-6 text-center bg-gray-950">
            <h1 className="text-3xl font-bold text-green-700">Bienvenido a la Liga ⚽</h1>
            <div className="mt-4 flex justify-center gap-4">
                <Link to="/referee" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Arbitros
                </Link>
                <Link to="/admin" className="bg-green-600 text-white px-4 py-2 rounded">
                    Administrador
                </Link>
                <Link to="/user" className="bg-gray-700 text-white px-4 py-2 rounded">
                    Jugadores
                </Link>
            </div>
        </div>
    )
}

export default Home
