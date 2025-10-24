import { useNavigate } from 'react-router-dom';

import { Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../../styles/users/login.css'
import Logo from '../../assets/logoPhantom.png'


const Login = () => {
    const navigate = useNavigate();

    const onRememberme = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="login__user relative w-full h-dvh flex justify-end pe-10">
            <div className="absolute top-0 left-0 flex items-center p-[20px]">
                <img src={Logo} className="w-16" alt="Logo" />
                <h4 className="text-3xl text-amber-50 font-medium">PhantomCT</h4>
            </div>

            <div className="w-[55%] h-full flex justify-center" style={{ backgroundColor: "#0A111C", clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}>
                <div className="w-[55%] h-full flex flex-col justify-center gap-6">
                    <h3 className="text-4xl text-slate-400 font-bold text-center">Hola Jugador</h3>
                    <Input size="large" placeholder="Usuario" prefix={<UserOutlined />} />
                    <Input size="large" placeholder="Contraseña" prefix={<LockOutlined />} />
                    <Checkbox onChange={onRememberme} style={{ color: "#fff" }}>Recuérdame</Checkbox>
                    <Button onClick={() => navigate("/user/inicio")} ghost size="large" style={{ width: "45%", alignSelf: "center", color: "#90A1B9", border: "1.5px solid #90A1B9" }}>ENTRAR</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
