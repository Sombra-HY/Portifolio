import "./ListLinguages.css"
import {BoxIconLanguage} from "../BoxIconLanguage/BoxIconLanguage";

export const ListLinguages = ({languages}) => {
  return(
      <div className="ListLinguages">
          {languages.map((obj)=>{
              const {iconsclass ,name} = obj;

              return <BoxIconLanguage text={name} name={iconsclass}/>
          })}
      </div>
  )
}