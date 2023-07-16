import Link from "next/link";
const Project = ({projects, activeTitle})=>{
    return <>
        <span className="aside-content">1인 프로젝트</span>
        <ol>
            {projects.map(l=>{
                return <li key={l.title}><Link href={l.title}  className={activeTitle === l.title ? "active" : ""}>{l.title}</Link></li>
            })}
        </ol>
    </>
};
export default Project;