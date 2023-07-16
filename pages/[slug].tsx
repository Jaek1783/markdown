import ReactMarkdown from "react-markdown";
import { getPostData, getpostsFiles } from "../helper/util";
import ProjectDetail from "../components/projects/project-detail";
const ClickPageComponent = ({posts})=>{
    return <div className="page">
        {posts.title ? <ProjectDetail posts = {posts}/>:<ReactMarkdown >{posts.content}</ReactMarkdown>}
    </div>
};
export default ClickPageComponent;

export const getStaticProps = (context)=>{
    const {params} = context;
    const {slug} = params;
    const postData = getPostData(slug);
    return {
        props : {
            posts:postData
        },
        revalidate : 600
    }
}

export const getStaticPaths = ()=>{
   const postsFileNames =  getpostsFiles();
   const slugs = postsFileNames.map(fileName => fileName.replace(/\.md/, '')); 
     return {
        paths: slugs.map((slug) => ({params : {slug:slug}})),
        fallback : false
     }
}