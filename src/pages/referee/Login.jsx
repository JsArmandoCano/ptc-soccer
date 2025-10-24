import { useNavigate } from 'react-router-dom';

import { Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../../styles/referee/login.css'
import Logo from '../../assets/logoPhantom.png'


const Login = () => {
    const navigate = useNavigate();

    const onRememberme = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="login__refeere relative w-full h-dvh flex">
            
            <div className="absolute w-[460px] h-[460px] flex justify-center items-center rounded-full" style={{ backgroundColor: "#0A111C" }}>
                <div className="w-[80%] h-full flex flex-col justify-center gap-6">
                    <h3 className="text-4xl text-slate-400 font-bold text-center">Hola Árbitro</h3>
                    <Input size="large" placeholder="Usuario" prefix={<UserOutlined />} />
                    <Input size="large" placeholder="Contraseña" prefix={<LockOutlined />} />
                    <Checkbox onChange={onRememberme} style={{ color: "#fff" }}>Recuérdame</Checkbox>
                    <Button onClick={() => navigate("/referee/inicio")} ghost size="large" style={{ width: "40%", alignSelf: "center", color: "#90A1B9", border: "1.5px solid #90A1B9" }}>ENTRAR</Button>
                </div>
            </div>

            <div className="w-[100%] h-full flex flex-col justify-between pt-[7px] pb-[12px] px-[20px]">
                <div className="w-full flex items-center">
                    <img src={Logo} className="w-16" alt="Logo" />
                    <h4 className="text-3xl text-amber-50 font-medium">PhantomCT</h4>
                </div>
                <div>
                    <p className="text-[20px] text-neutral-200 text-center font-normal">“El árbitro con más tarjetas rojas en Mundiales es Arturo Brizio Carter (México), con 7 expulsiones en solo 6 partidos.”</p>
                </div>
            </div>
        </div>
    )
}

export default Login
