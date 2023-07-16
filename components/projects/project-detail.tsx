import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({posts})=>{
    console.log(posts.stack)
    return <>
    <h1 className="project-detail-title">{posts.title}</h1>
    <h2><Image src={posts.mainImage} alt={`${posts.title}이미지`} width={1000} height={1000}/></h2>
    <ul className="project-detail-container">
        <li>
            <dl className="project-detail-item">
                <dt>🗓️제작기간</dt>
                <dd>{posts.makeTime}</dd>
                <dd>{posts.makeDesc}</dd>
            </dl>
        </li>
        <li>
            <dl className="project-detail-item">
                <dt>💻주소</dt>
                <dd><Link href={posts.adress} target="_blank">{posts.adress}</Link></dd>
            </dl>
        </li>
        <li>
            <dl className="project-detail-item">
                <dt>😁개요</dt>
                {posts.description.map((d,index)=>{
                    return <dd key={index}>{d.desc}</dd>
                })}
            </dl>
        </li>
        <li>
            <dl className="project-detail-item">
                <dt>🛠️ 서비스 소개</dt>
                <dd>
                {posts.service.map((d,index)=>{
                    if(d.desc){
                        return <span key={index} className="project-detail-item-text">{d.desc}</span>
                    }
                    else{
                        return <span key={index} className="project-detail-item-image">
                            <Image src={d.src} alt={`스냅샷 ${index}이미지`} width={1000} height={1000}/>
                        </span>
                    }
                    
                })}
                </dd>
            </dl>
        </li>
    </ul>

    </>
};

export default ProjectDetail;