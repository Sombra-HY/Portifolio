import {dataLanguages} from "../../data/dataLanguages";
import {BoxIconLanguage} from "../../components/ui/BoxIconLanguage/BoxIconLanguage";

import "./style.css";

export const Boxskills = () => {
  return(
      <>
          <h2 className="SkillsTitule">Habilidades</h2>
          <section className="Boxskills">
              {dataLanguages.map((language)=>{
                  const { name, iconsclass } = language;
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

  )
}