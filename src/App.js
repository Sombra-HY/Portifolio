import {Boxskills} from "./layouts/BoxSkills/Boxskills";
import {BoxProjetos} from "./components/ui/BoxProjetos/BoxProjetos";
import {About} from "./components/about/About";


export const App = () => {


    return (
        <>


            <About/>
            <h2>Habilidades</h2>

            <Boxskills/>
            <BoxProjetos/>

            <footer>
                <h2>Contato</h2>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </footer>
        </>
    );
}