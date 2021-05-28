import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import NewsItem from './NewsItem';

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get("https://newsapi.org/v2/everything?q=apple&from=2021-05-27&to=2021-05-27&sortBy=popularity&apiKey=ee9a044e3fe245878580d59f52a7f12a");

            setArticles(res.data.articles)
            console.log(res);
        }

    getArticles()
    }, [])
    
    return (
        <div>
            <h1 className="large text-primary">NEWS</h1>
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />
            ))}
        </div>
    )
}

export default News
