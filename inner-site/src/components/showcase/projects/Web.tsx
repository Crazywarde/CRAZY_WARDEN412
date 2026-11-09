import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface WebProjectsProps {}

const WebProjects: React.FC<WebProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Web</h1>
            <h3>Experiments</h3>
            <br />
            <p>
                I love interactive websites and 3D environments. This is where I
                keep my web experiments.
            </p>
            <br />
            <div className="text-block">
                <h2>Interactive 3D Portfolio</h2>
                <br />
                <p>
                    This portfolio is a 3D room with a retro computer, and the
                    website you are on right now is the screen of that
                    computer. It is built with Three.js, JavaScript, HTML5, CSS3
                    and npm / Node.js, and I customised it into my own creator
                    space.
                </p>
                <br />
                <p>
                    The project is based on the open-source portfolio by Henry
                    Heffernan, which is how I am learning how interactive 3D
                    websites are put together. Exploring open source projects
                    and modifying them is one of my favorite ways to learn.
                </p>
                <br />
                <h3>Features:</h3>
                <ul>
                    <li>
                        <p>Interactive 3D room with a desk, chair and plant.</p>
                    </li>
                    <li>
                        <p>Retro computer monitor you can click into.</p>
                    </li>
                    <li>
                        <p>Speakers with a sound toggle.</p>
                    </li>
                    <li>
                        <p>Mouse-controlled camera and interactions.</p>
                    </li>
                </ul>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - Original 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - Original OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default WebProjects;
