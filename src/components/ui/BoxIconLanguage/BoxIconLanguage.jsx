import "./style.css";

export const BoxIconLanguage = ({ name, text = false }) => {
  return(
      <div className = "BoxIconLanguage">
          <i className = {name}/>
          {text && <p>{text}</p>}
      </div>
  )
}
