import {GetCiclo} from "./utils/ciclo";

import "./style.css";
export const About = () => {
    const ciclo = GetCiclo();
  return (
      <section className={"about"}>
          <div className={"imgAbout"}>

          </div>
          <div className={"textAbout"}>
              <h1>Lucas Sombra</h1>
              <h2>Sobre Mim</h2>
              <p>
                  Desenvolvendo Interfaces com React.js<br/>
                  Cursando Ciência da Computação, {ciclo}º ciclo, no Centro Universitário FEI <br/>

                  Interesse em desenvolvimento Front-End e Back-End<br/>
                  Buscando a oportunidade para trabalhar como desenvolvedor<br/>
              </p>
          </div>

      </section>
  )
}