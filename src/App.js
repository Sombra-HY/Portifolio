import {Boxskills} from "./layouts/BoxSkills/Boxskills";
import {BoxProjetos} from "./components/ui/BoxProjetos/BoxProjetos";
import {About} from "./components/about/About";
import {data} from "./components/ui/Contatos/data/data";


export const App = () => {


    return (
        <>


            <About/>

            <Boxskills/>
            <BoxProjetos/>

            <footer>
                <div className={"boxfooter"}>
                    {data.map((obj)=>{
                        const { url,imgclass,name } = obj;
                        return (
                            <a href={url} className="boxlinks" key={name}>
                                <i className={ imgclass }></i>
                                <h6>{name}</h6>
                            </a>
                        )
                    })}
                </div>

                <h4>l.sombra.nascimento@gmail.com</h4>
            </footer>
        </>
    );
}