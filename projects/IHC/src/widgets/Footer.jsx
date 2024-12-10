import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'
import '../assets/styles/estilos_footer.css'

import logoComputacionFondoNegro from '../assets/imgs/logos/Logo_Computacion_Fondo_Negro.png';
import logoUNSAFondoNegro from '../assets/imgs/logos/LOGO_UNSA_Fondo_Negro.png';

import logoWhatsappBlanco from '../assets/imgs/logos/redes_sociales/logo_whatsapp_blanco.png';
import logoFacebookBlanco from '../assets/imgs/logos/redes_sociales/logo_facebook_blanco.png';
import logoInstagramBlanco from '../assets/imgs/logos/redes_sociales/logo_instagram_blanco.png';

export function Footer (){
    return(
        <footer>
            <div className="contenedor_politicas">
                <ul>
                    <li><a href="">Corporación</a></li>
                    <li><a href="">Privacidad</a></li>
                    <li><a href="">Ajustes de Cookies</a></li>
                    <li><a href="">Política de Cookies</a></li>
                    <li><a href="">Aviso Legal</a></li>
                </ul>
            </div>
            <div className="contenedor_contacto">
                <div>
                    <h3>Correo electrónico personal:</h3>
                    <ul>
                        <li>jdiegodiego4@gmail.com</li>
                        <li>emamanix@gmail.com</li>
                    </ul>

                    <h3>Correo electrónico institucional:</h3>
                    <ul>
                        <li>jvaldiviame@unsa.edu.pe</li>
                        <li>amamaniq@unsa.edu.pe</li>
                    </ul>
                </div>
            </div>
            <div className="contenedor_redes_sociales">
                <a href="" className="cont_red_social">
                    <img src={logoInstagramBlanco} alt=""/>
                    <p>/juandiegovaldiviamendoza</p>
                </a>
                <a href="" className="cont_red_social">
                    <img src={logoFacebookBlanco} alt=""/>
                    <p>/juandiegovaldiviamendoza</p>
                </a>
                <a href="" className="cont_red_social">
                    <img src={logoFacebookBlanco} alt=""/>
                    <p>/alexenriquemamani</p>
                </a>
                <a href="" className="cont_red_social">
                    <img src={logoWhatsappBlanco} alt=""/>
                    <p>whatsapp/922900787</p>
                </a>
                <a href="" className="cont_red_social">
                    <img src={logoWhatsappBlanco} alt=""/>
                    <p>whatsapp/925968311</p>
                </a>
            </div>
            <div className="contenedor_logo_fecha">
                <img src={logoUNSAFondoNegro} alt=""/>
                <img src={logoComputacionFondoNegro} alt=""/>
                <p>Arequipa - 2024</p>
            </div>
        </footer>
    )
}