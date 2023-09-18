import {projects} from "../../../data/dataProjects";
import {ProjectPoster} from "../ProjectPoster/ProjectPoster";

import "./style.css";

export const BoxProjetos = () => {
  return(
      <section className="box-Projetos">
          <h1>Projetos</h1>
          {projects.map((proje,index) => {
              return (<ProjectPoster project={proje} key={`${index}`}/>)
          })}
      </section>
  )
}