import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'__posts');
export const getpostsFiles = ()=>{
    return fs.readdirSync(postsDirectory);
}
export const getPostData = (postIdentifier)=>{
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);
    
    const postData = {
        slug:postSlug,
        ...data,
        content
    }
    return postData
}
export const getAllPosts = ()=>{
    const postFiles = getpostsFiles();
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })
//   for(const postFile of postFiles) {
//     const postData = getPostData(postFile)
//   }
return allPosts;
}