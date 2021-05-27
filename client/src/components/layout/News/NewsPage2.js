import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsItem2 from './newsimage2.jpg'

// https://scitechdaily.com/artificial-intelligence-algorithm-helps-unravel-the-physics-underlying-quantum-systems/

const NewsPage = () => {
  return (
      <div>
        <Link class="btn btn-dark my-1" to="/news">Go Back</Link>
        <h1>Artificial Intelligence Algorithm Helps Unravel the Physics Underlying Quantum Systems</h1>
        <p><strong>TOPICS:</strong>Algorithm Artificial Intelligence Computer Science Machine Learning Popular Quantum Computing Quantum Information Science University Of Bristol</p>
        <p className="paragaphs">By UNIVERSITY OF VIRGINIA SCHOOL OF ENGINEERING AND APPLIED SCIENCE MAY 4, 2021</p>
        <img src={NewsItem2} alt='newsimage' />

        <p className="paragaphs"><strong>Protocol to reverse engineer Hamiltonian models advances automation of quantum devices.</strong></p>
        <p className="paragaphs">Scientists from the University of Bristol’s Quantum Engineering Technology Labs (QETLabs) have developed an algorithm that provides valuable insights into the physics underlying quantum systems — paving the way for significant advances in quantum computation and sensing, and potentially turning a new page in scientific investigation.</p>
        <p className="paragaphs">In physics, systems of particles and their evolution are described by mathematical models, requiring the successful interplay of theoretical arguments and experimental verification. Even more complex is the description of systems of particles interacting with each other at the quantum mechanical level, which is often done using a Hamiltonian model. The process of formulating Hamiltonian models from observations is made even harder by the nature of quantum states, which collapse when attempts are made to inspect them.</p>
        <p className="paragaphs">In the paper, Learning models of quantum systems from experiments, published in Nature Physics, quantum mechanics from Bristol’s QET Labs describe an algorithm that overcomes these challenges by acting as an autonomous agent, using machine learning to reverse engineer Hamiltonian models.</p>      
        <p className="paragaphs">The team developed a new protocol to formulate and validate approximate models for quantum systems of interest. Their algorithm works autonomously, designing and performing experiments on the targeted quantum system, with the resultant data being fed back into the algorithm. It proposes candidate Hamiltonian models to describe the target system, and distinguishes between them using statistical metrics, namely Bayes factors.</p>      
        <p className="paragaphs">Excitingly, the team was able to successfully demonstrate the algorithm’s ability on a real-life quantum experiment involving defect centers in a diamond, a well-studied platform for quantum information processing and quantum sensing.</p>      
        <p className="paragaphs">The algorithm could be used to aid automated characterization of new devices, such as quantum sensors. This development therefore represents a significant breakthrough in the development of quantum technologies.</p>      
        <p className="paragaphs">“Combining the power of today’s supercomputers with machine learning, we were able to automatically discover structure in quantum systems. As new quantum computers/simulators become available, the algorithm becomes more exciting: first it can help to verify the performance of the device itself, then exploit those devices to understand ever-larger systems,” said Brian Flynn from the University of Bristol’s QETLabs and Quantum Engineering Centre for Doctoral Training.</p>      
        <p className="paragaphs">“This level of automation makes it possible to entertain myriads of hypothetical models before selecting an optimal one, a task that would be otherwise daunting for systems whose complexity is ever increasing,” said Andreas Gentile, formerly of Bristol’s QETLabs, now at Qu & Co.</p>      
        <p className="paragaphs">“Understanding the underlying physics and the models describing quantum systems, help us to advance our knowledge of technologies suitable for quantum computation and quantum sensing,” said Sebastian Knauer, also formerly of Bristol’s QETLabs and now based at the University of Vienna’s Faculty of Physics.</p>      
        <p className="paragaphs">Anthony Laing, co-Director of QETLabs and Associate Professor in Bristol’s School of Physics, and an author on the paper, praised the team: “In the past we have relied on the genius and hard work of scientists to uncover new physics. Here the team have potentially turned a new page in scientific investigation by bestowing machines with the capability to learn from experiments and discover new physics. The consequences could be far reaching indeed.”</p>      
        <p className="paragaphs">The next step for the research is to extend the algorithm to explore larger systems, and different classes of quantum models which represent different physical regimes or underlying structures.</p>      
        <p className="paragaphs">Reference: “Learning models of quantum systems from experiments” by Gentile et al., 29 April 2021, Nature Physics.
DOI: 10.1038/s41567-021-01201-7</p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
        <p className="paragaphs"></p>      
      </div>
  );
};

export default NewsPage;