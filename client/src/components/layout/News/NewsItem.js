import React from 'react';
import './newsitem.css'

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        <div className="news-item">
            <img className="news-img" src={urlToImage} alt="New news" />
            <h3 className="newsTitle">
                <a href={url}>{title}</a>
            </h3>
            <p className="newsDescription">{description}</p>
        </div>
    )
}

export default NewsItem
