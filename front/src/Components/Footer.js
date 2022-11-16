import '../App';
import './style/Footer.css'
import img from "./img/d13.png"
import img2 from "./img/voyageprive.png"
import img3 from "./img/inco.png"
import img4 from "./img/provencetourisme.png"
import img5 from "./img/code4marseille.png"
import img6 from "./img/AWS.png"



function Footer() {
    return (
        <footer class="footer">
            <a href="https://www.departement13.fr/" target="_blank">
                <img src={img} alt="d13" />
            </a>
            <a href="https://www.voyage-prive.com" target="_blank">
                <img src={img2} alt="voyage privé" />
            </a>
            <a href="https://inco-group.co/" target="_blank">
                <img class="smaller" src={img3} alt="inco" />
            </a>
            <a href="https://www.myprovence.fr/" target="_blank">
                <img src={img4} alt="my provence" />
            </a>
            <a href="https://code4marseille.fr/" target="_blank">
                <img src={img5} alt="code4marseille" />
            </a>
            
            <a href="https://aws.amazon.com/fr/" target="_blank">
                <img src={img6} alt="aws" />
            </a>
        </footer>
    )
}
export default Footer; 