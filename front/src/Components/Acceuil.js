import '../App';
import Header from "../Components/Header"
import Search from "../Components/Search"
import Map from "../Components/Map"
import Result from "../Components/Result"
import './style/Acceuil.css'
import Footer from './Footer';

function Acceuil() {
    return (
        <>
            <Header />
            <Map />
            <Search/>
            <Footer />
        </>
    )
}
export default Acceuil; 
