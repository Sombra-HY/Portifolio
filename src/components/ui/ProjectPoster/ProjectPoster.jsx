export const ProjectPoster = ({project}) => {
    const {name, description, url, code }= project;

    return(
        <article className="ProjectPoster">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className={"boxurls"}>
                <a  href={ code }> Codigo </a>
                { !!url && <a href={ url }> Projeto </a>}
            </div>

        </article>
    )
}