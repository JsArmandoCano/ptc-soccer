import Logo from '../assets/logoFut.png'

const Header = ({ name, rol }) => {
    return (
        <div className="w-full h-[80px] flex items-center justify-between px-[15px] shadow">
            <div className="w-full h-full flex items-center">
                <img src={Logo} className="w-16" alt="Logo" />
                <h4 className="text-3xl text-zinc-950 font-medium">PhantomCT</h4>
            </div>
            <div className="h-full flex items-center">
                <img className="w-[55px] h-[55px] rounded-2xl object-cover" src="https://i0.wp.com/tomatazos.buscafs.com/2025/04/estreno-de-the-mandalorian-grogu.jpg?fit=1069,676&quality=75&strip=all" alt="Jugador" />
                <div className="w-[200px] h-full flex flex-col justify-center ms-3">
                    <h3 className="text-zinc-950 text-[20px] font-bold">{name}</h3>
                    <p className="text-zinc-600 text-[16px]">{rol}</p>
                </div>
            </div>
        </div>
    )
}

export default Header
