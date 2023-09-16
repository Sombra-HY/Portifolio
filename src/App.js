import { useState} from "react";

import {BoxIconLanguage} from "./components/ui/BoxIconLanguage/BoxIconLanguage";
import {dataLanguages} from "./data/dataLanguages"

export const App = () => {


    return (
        <>
            <section className="box-skills">
                {dataLanguages.map((language)=>{
                    const { name, iconsclass } = language;
                    console.log(iconsclass);
                    return (
                        <BoxIconLanguage
                            name={ iconsclass }
                            key={`icon${iconsclass}`}
                            text={name}
                        />
                    )
                } )}
            </section>
        </>
    );
}
{/*<header id={"header"}>*/}
{/*    <NavMov className={""}>*/}
{/*        <>*/}
{/*            <li><a href="#">Sobre</a></li>*/}
{/*            <li><a href="#">Projetos</a></li>*/}
{/*            <li><a href="#">Habilidades</a></li>*/}
{/*            <li><a href="#">Contato</a></li>*/}
{/*        </>*/}
{/*    </NavMov>*/}
{/*</header>*/}
export const NavMov = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible);
    }

    return (
        <>
            <button onClick={handleVisible}>menu</button>
            <ul  id={"navlist"} className={visible?"moveR":"moveL"} >
                {children}
            </ul>
        </>
    );
}