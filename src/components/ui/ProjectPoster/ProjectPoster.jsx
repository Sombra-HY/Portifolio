import {ListLinguages} from "../ListLinguages/ListLinguages";
import {TextExpandable} from "../TextExpandeble/TextExpandable";

export const ProjectPoster = ({project}) => {
    const {name, description, url, code,linguagens,goal }= project;

    return(
        <article className="ProjectPoster">
            <h1>{name}</h1>
            <p>{description}</p>
            <TextExpandable text={goal} maxlength={0}/>
            <div className={"boxurls"}>
                <a  href={ code }> Codigo </a>
                { !!url && <a href={ url }> Projeto </a>}
            </div>
            <ListLinguages languages={linguagens} />
        </article>
    )
}