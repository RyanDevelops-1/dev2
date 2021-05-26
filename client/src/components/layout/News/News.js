import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//News Images
import NewsItem from './newsimage.jpg'
import NewsItem2 from './newsimage2.jpg'

const News = () => {
  return (
    <section>
        <h1 className="newsheader">
            NEWS
        </h1>
        <div class="profiles">
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
            <Link to="spectre-strikes-back-new-hacking-vulnerability-affecting-billions-of-computers-worldwide">Read More <i className="fas fa-arrow-right" /></Link>
            </ul>
            </div>

            <div class="profile bg-light">
            <img
                src={NewsItem2}
                alt=""
                width="300px"
            />
            <div>
                <p>PHYSICS MAY, 4 2021</p>
                <h2>Artificial Intelligence Algorithm Helps Unravel the Physics Underlying Quantum Systems</h2>
                <p>Protocol to reverse engineer Hamiltonian models advances automation of quantum devices. Scientists from the University of Bristol’s Quantum Engineering Technology Labs (QETLabs) have developed an…</p>
            </div>

            <ul>
            <Link to="artificial-intelligence-algorithm-helps-unravel-the-physics-underlying-quantum-systems">Read More <i className="fas fa-arrow-right" /></Link>
            </ul>
            </div>
        </div>
    </section>
  );
};

export default News;