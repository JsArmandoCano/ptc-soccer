import { useNavigate } from 'react-router-dom';

import { Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../../styles/admin/login.css'
import Logo from '../../assets/logoPhantom.png'


const Login = () => {
    const navigate = useNavigate();

    const onRememberme = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="flex h-dvh" style={{ backgroundColor: "#0A111C" }}>
            <div className="img__login--admin w-[60%] h-full p-[20px]">
                <div className="h-full flex flex-col justify-between">
                    <div className="w-full flex items-center">
                        <img src={Logo} className="w-16" alt="Logo" />
                        <h4 className="text-3xl text-amber-50 font-medium">PhantomCT</h4>
                    </div>
                    <div>
                        <p className="text-[20px] text-neutral-200 font-normal">“Administrador: ¡La temporada está en marcha! Publica novedades y mantén informados a los equipos.”</p>
                    </div>
                </div>
            </div>
            <div className="w-[40%] h-full px-10 py-14">
                <div className="w-full h-full flex flex-col justify-center gap-6">
                    <h3 className="text-4xl text-slate-400 font-bold">Administrador</h3>
                    <Input size="large" placeholder="Usuario" prefix={<UserOutlined />} />
                    <Input size="large" placeholder="Contraseña" prefix={<LockOutlined />} />
                    <Checkbox onChange={onRememberme} style={{ color: "#fff" }}>Recuérdame</Checkbox>
                    <Button onClick={() => navigate("/admin/inicio")} ghost size="large" style={{ width: "40%", alignSelf: "center", color: "#90A1B9", border: "1.5px solid #90A1B9" }}>ENTRAR</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
