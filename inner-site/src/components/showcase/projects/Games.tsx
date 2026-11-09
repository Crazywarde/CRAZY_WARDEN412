import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface GamesProjectsProps {}

const GamesProjects: React.FC<GamesProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Games</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are the Java games I have been building while learning
                game development. They are learning projects, and I keep
                improving them as I learn more.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Dungeon Loot Explorer</h2>
                <br />
                <p>
                    Dungeon Loot Explorer is a Java terminal RPG concept. You
                    explore, fight monsters and collect loot while building up
                    your character.
                </p>
                <br />
                <ul>
                    <li>
                        <p>Monster data stored in 2D arrays.</p>
                    </li>
                    <li>
                        <p>Rarity system that ranges from Common to Mythic.</p>
                    </li>
                    <li>
                        <p>HP, gold, XP and leveling systems.</p>
                    </li>
                    <li>
                        <p>Player attack mechanics.</p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Snakey</h2>
                <br />
                <p>
                    Snakey is my take on the classic snake game, written in
                    Java.
                </p>
                <br />
                <ul>
                    <li>
                        <p>Grid-based movement with 32-pixel tiles.</p>
                    </li>
                    <li>
                        <p>
                            Prevents the snake from instantly reversing into
                            itself.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Press Me</h2>
                <br />
                <p>
                    Press Me is a fast Java game played against the clock on a
                    10 x 14 grid of 50-pixel tiles.
                </p>
                <br />
                <ul>
                    <li>
                        <p>30-second timer.</p>
                    </li>
                    <li>
                        <p>Score tracking.</p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Bricky</h2>
                <br />
                <p>
                    Bricky is a brick-breaker game concept in a 960 x 800
                    window, where I practiced smooth paddle movement and
                    controlling its speed.
                </p>
            </div>
            <div className="text-block">
                <h2>SpaceShooter</h2>
                <br />
                <p>
                    SpaceShooter is a Java space shooter. While building it I
                    worked with game window dimensions and debugged an
                    initialization issue with getWidth() and getHeight(), which
                    taught me a lot about when a window is ready to be measured.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default GamesProjects;
