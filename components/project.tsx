import {softwareProjectsData, researchData} from '../lib/data'


type ProjectProps = typeof softwareProjectsData[number];

function Project({title, description, tags, imageUrl} : ProjectProps) {
    return (
        <div>
            <article className = "flex-col">
                <title> {title} </title>
                <p> {description} </p>
                <div>
                    {tags.map((tag, index) => (
                        <div>
                            {tag}
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}
