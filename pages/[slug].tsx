import ReactMarkdown from "react-markdown";
import { getPostData, getpostsFiles } from "../helper/util";
const ClickPageComponent = (props)=>{
    // console.log(props.post)
    return <div className="page">
        <ReactMarkdown >{props.post.content}</ReactMarkdown>
    </div>
};
export default ClickPageComponent;

export const getStaticProps = (context)=>{
    const {params} = context;
    const {slug} = params;
    const postData = getPostData(slug);
    return {
        props : {
            post:postData
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