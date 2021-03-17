import React from 'react'
import { graphql} from "gatsby"
import BlogLayout from "../layouts/BlogLayout"
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import Seo from "../components/seo";
import imageBlog from "../images/web-programacion.jpg"

export default function Blog(props) {
    const { data, pageContext } = props;
    const posts = data.allStrapiPost.nodes;
    //console.log(posts);
    return (
        <BlogLayout>
           <Seo 
                title="Blog sobre programación"
                description="Web sobre desarrollo Web, programación JavaScript, React, Node Js, Angular"
                image={imageBlog}
           />
           <PostList posts={posts} />
           <Pagination pageContext={pageContext} />
        </BlogLayout>
    )
}

export const query = graphql
`query($skip: Int!, $limit: Int!) {
    allStrapiPost(
        skip: $skip
        limit: $limit
        sort: { fields: createdAt, order: DESC}) {
      nodes {
        id
        title
        createdAt
        url
        content
       
      }
    }
  }
  `
