import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsItem from './newsimage.jpg'

const News = () => {
  return (
    <div class="profiles">
        <h1 className="large text-primary">News</h1>
        <div class="profile bg-light">
          <img
            src={NewsItem}
            alt=""
            width="300px"
          />
          <div>
            <p>TECHNOLOGY MAY, 4 2021</p>
            <h2>Pushing Computing to the Edge With Innovative Microchip Design to Make AI Accessible in Real-Time</h2>
            <p>Computing experts thought they had developed adequate security patches after the major worldwide Spectre flaw of 2018, but UVA’s discovery shows processors are open to…</p>
          </div>

         <ul>
           <Link to="spectre-strikes-back-new-hacking-vulnerability-affecting-billions-of-computers-worldwide">Test News Link</Link>
         </ul>
        </div>

      </div>
  );
};

export default News;