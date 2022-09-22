import React from "react";
import Article from "./Article"



function ArticleList(props){

    const Articlelists = props.posts.map((articles) => {
        return <Article key = {articles.id} title = {articles.title} date = {articles.date} preview = {articles.preview} minutes = {articles.minutes} />
    })
    return(
        <main>
           {Articlelists}
        </main>
    )
}

export default ArticleList