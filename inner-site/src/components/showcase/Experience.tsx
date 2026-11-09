
import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface JourneyProps {}

const Journey: React.FC<JourneyProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>My Journey</h1>
            <h3>From Curiosity to Creation</h3>
            <br />

            <div className="text-block">
                <p>
                    Every developer starts somewhere. My journey is a
                    continuous process of learning, experimenting,
                    making mistakes, solving problems, and discovering
                    new things. I started with an interest in programming
                    and how games work, and gradually began exploring
                    different areas of technology and development.
                </p>
                <br />
                <p>
                    I'm still learning, and I don't consider this journey
                    finished. Every project teaches me something new,
                    every error gives me something to investigate, and
                    every experiment gives me another reason to keep
                    building.
                </p>
            </div>

            <ResumeDownload />

            {/* Programming Journey */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>The Beginning</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Discovering Programming</h3>
                        <b><p>Early Exploration</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    My journey began with curiosity about computers,
                    technology, and how software works. I became
                    interested in understanding how games are created,
                    how programs process information, and how a few
                    lines of code can turn an idea into something
                    interactive.
                </p>
                <br />
                <p>
                    Instead of only using software and playing games,
                    I wanted to understand what happens behind the
                    screen. This curiosity gradually led me towards
                    programming, experimenting with code, and
                    building my own small projects.
                </p>
            </div>

            {/* Java */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Java</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/wardeniscrazy/java"
                        >
                            <h4>github.com/wardeniscrazy/java</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>My Main Programming Language</h3>
                        <b><p>Ongoing</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    Java became my main language for learning
                    programming. I started with basic concepts
                    and gradually moved towards building programs
                    that involved more logic and interaction.
                    It helped me understand how programming
                    concepts work together to create real
                    applications and games.
                </p>
                <br />
                <p>
                    Some of the concepts I've practiced include:
                </p>
                <br />
                <ul>
                    <li><p>Variables, data types and operators.</p></li>
                    <li><p>Conditional statements and decision-making.</p></li>
                    <li><p>Loops and repetitive operations.</p></li>
                    <li><p>Arrays and multidimensional arrays.</p></li>
                    <li><p>ArrayList and managing collections of data.</p></li>
                    <li><p>Scanner and handling user input.</p></li>
                    <li><p>File handling using FileWriter.</p></li>
                    <li><p>Basic object-oriented programming concepts.</p></li>
                    <li><p>Java Swing and JFrame for desktop interfaces.</p></li>
                </ul>
                <br />
                <p>
                    Learning Java taught me to break bigger problems
                    into smaller steps, understand program flow, and
                    think logically before writing code. I'm still
                    improving my knowledge and trying to apply what
                    I learn in practical projects.
                </p>
            </div>

            {/* First Projects */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>My First Projects</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Learning by Building</h3>
                        <b><p>Experimenting</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    After learning the fundamentals, I started
                    experimenting with small programs. I wanted
                    to move beyond simple coding exercises and
                    build things that actually did something.
                    These projects helped me understand how
                    different programming concepts could be
                    combined into useful applications.
                </p>
                <br />
                <p>
                    Some of my programming experiments include:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <strong>To-Do List:</strong> A task
                            management project where I explored
                            storing tasks in a text file using
                            Java file handling.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Warden Bank:</strong> A
                            banking application experiment
                            focused on programming logic and
                            handling information.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Dungeon Loot Explorer:</strong>
                            A terminal-based RPG featuring monsters,
                            rarity levels from Common to Mythic,
                            health, gold, XP, leveling, and
                            player attack mechanics.
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    These projects gave me opportunities to
                    practise programming concepts in a more
                    practical way and understand how to organize
                    code into something bigger than individual
                    exercises.
                </p>
                <p>
                    Explore them on my{' '}
                    <Link to="/projects/programs">Programs</Link>{' '}
                    page.
                </p>
            </div>

            {/* Game Development */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Game Development</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Turning Code into Games</h3>
                        <b><p>Ongoing</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    Game development is one of the biggest reasons
                    I became interested in programming. I wanted
                    to understand how games handle movement,
                    controls, scoring, timers, player interaction,
                    and other gameplay systems.
                </p>
                <br />
                <p>
                    I started experimenting with small arcade-style
                    games using Java. Each project gave me a
                    different opportunity to practise programming
                    logic and understand how game systems work.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <strong>Snakey:</strong> Experimenting
                            with grid-based movement, tile sizes,
                            player direction, and preventing
                            immediate reverse movement.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Press Me:</strong> Exploring
                            grid-based gameplay, a scoring system,
                            and a 30-second timer.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Bricky:</strong> Experimenting
                            with brick-breaker gameplay,
                            paddle movement, and game window
                            dimensions.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>SpaceShooter:</strong>
                            Exploring the structure of a
                            space shooter and learning about
                            game window initialization.
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    Working on these games helped me understand
                    that game development involves much more
                    than writing code. It requires planning
                    systems, handling input, managing game
                    states, and making sure everything works
                    together.
                </p>
                <p>
                    You can explore my game experiments on
                    my <Link to="/projects/games">Games</Link>{' '}
                    page.
                </p>
            </div>

            {/* Game Design */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Game Design</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Understanding Gameplay</h3>
                        <b><p>Learning</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    As I explored game development, I also became
                    interested in the design decisions behind
                    games. I started paying more attention to
                    how gameplay mechanics, controls, challenges,
                    rewards, and progression systems affect
                    the overall experience.
                </p>
                <br />
                <p>
                    I enjoy thinking about how a simple idea
                    can become an interesting game. Even small
                    details such as movement speed, difficulty,
                    feedback, and scoring can change how a
                    player experiences a game.
                </p>
                <br />
                <p>
                    I want to keep improving my understanding
                    of gameplay design, level design, balancing,
                    player interaction, and the process of
                    turning creative ideas into enjoyable
                    gaming experiences.
                </p>
            </div>

            {/* GitHub */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>GitHub & Open Source</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Exploring How Others Build</h3>
                        <b><p>Ongoing</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    As I continued learning, I became interested
                    in Git, GitHub, and open-source development.
                    I started exploring repositories, looking
                    through project structures, and understanding
                    how existing applications are organized.
                </p>
                <br />
                <p>
                    I enjoy discovering how other developers
                    approach problems, reading their code,
                    experimenting with existing projects,
                    and modifying things to understand how
                    they work.
                </p>
                <br />
                <p>
                    Git and GitHub have also become part of
                    my development workflow. I use them to
                    manage my projects and keep track of
                    my programming experiments.
                </p>
                <br />
                <p>
                    My Java projects are available on{' '}
                    <a
                        href="https://github.com/wardeniscrazy/java"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>.
                </p>
            </div>

            {/* Technology */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Technology Exploration</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Hardware, Software & Operating Systems</h3>
                        <b><p>Ongoing</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    My curiosity about technology goes beyond
                    programming. I'm interested in understanding
                    how computers work, how hardware components
                    communicate, and how software interacts
                    with the system underneath it.
                </p>
                <br />
                <p>
                    I enjoy exploring PC components such as
                    processors, graphics cards, RAM, storage,
                    cooling systems, and overall system
                    performance. I also like experimenting
                    with software, configurations, drivers,
                    and different development tools.
                </p>
                <br />
                <p>
                    I've explored Windows customization and
                    troubleshooting, and I've also experimented
                    with Linux, particularly Arch Linux and
                    KDE Plasma. These experiments have helped
                    me become more curious about operating
                    systems, desktop environments, networking,
                    and system configuration.
                </p>
                <br />
                <p>
                    I enjoy learning through experimentation,
                    investigating unexpected errors, and
                    understanding why something behaves
                    differently than expected.
                </p>
            </div>

            {/* Web and 3D */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Web & 3D Development</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Building Interactive Experiences</h3>
                        <b><p>Exploring</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    My interests gradually expanded into web
                    design and interactive 3D experiences.
                    I became fascinated by websites that feel
                    more like interactive environments than
                    ordinary pages.
                </p>
                <br />
                <p>
                    One of my biggest inspirations is the idea
                    of building a personal website around a
                    3D room, with a computer, desk, objects,
                    and interactive elements that visitors
                    can explore.
                </p>
                <br />
                <p>
                    I've been exploring React, JavaScript,
                    HTML, CSS, Three.js, Node.js, and npm
                    while working towards creating my own
                    interactive portfolio.
                </p>
                <br />
                <p>
                    I also explored open-source 3D portfolio
                    projects and experimented with modifying
                    existing website code to understand
                    how the different parts fit together.
                </p>
                <br />
                <p>
                    This portfolio itself is part of that
                    learning journey: a place to experiment
                    with ideas, develop my own visual identity,
                    and bring my interests together.
                </p>
            </div>

            {/* Creative Skills */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Creative Exploration</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Design & Content Creation</h3>
                        <b><p>Exploring</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    Apart from programming, I enjoy the creative
                    side of technology. I'm interested in
                    graphic design, visual composition,
                    3D modeling, video editing, thumbnails,
                    logos, and digital content creation.
                </p>
                <br />
                <p>
                    I like experimenting with different
                    colours, layouts, visual styles, and
                    creative ideas. I particularly enjoy
                    clean designs, minimalist environments,
                    and green visual elements inspired by
                    the Minecraft Warden aesthetic.
                </p>
                <br />
                <p>
                    I also enjoy exploring video editing
                    software and different ways to present
                    gaming and creative content. I see
                    design as another way to communicate
                    ideas, just like programming.
                </p>
            </div>

            {/* Japanese */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Japanese Language</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Learning Something New</h3>
                        <b><p>Ongoing</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    My interests aren't limited to computers
                    and games. I've also been learning
                    Japanese as a personal challenge.
                </p>
                <br />
                <p>
                    I've studied Hiragana and Katakana
                    and started exploring basic grammar,
                    vocabulary, and everyday expressions.
                    I've also been following a structured
                    learning approach inspired by Genki I.
                </p>
                <br />
                <p>
                    I enjoy practising sentence structures,
                    learning new words, and understanding
                    how Japanese expressions work in
                    everyday conversations. It's a different
                    kind of learning experience that keeps
                    me curious outside of programming.
                </p>
            </div>

            {/* What's Next */}

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>What's Next?</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>The Journey Continues</h3>
                        <b><p>In Progress</p></b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    I'm still at the beginning of my journey,
                    and there is a lot more I want to learn
                    and create. I want to become a better
                    programmer, understand game development
                    more deeply, and eventually create
                    original games under my own creative
                    identity.
                </p>
                <br />
                <ul>
                    <li>
                        <p>Improve my programming and problem-solving skills.</p>
                    </li>
                    <li>
                        <p>Build more original games and applications.</p>
                    </li>
                    <li>
                        <p>Explore advanced game development concepts.</p>
                    </li>
                    <li>
                        <p>Learn more about game design and level design.</p>
                    </li>
                    <li>
                        <p>Improve my 3D modeling and interactive web skills.</p>
                    </li>
                    <li>
                        <p>Explore more open-source projects and technologies.</p>
                    </li>
                    <li>
                        <p>Continue learning Japanese.</p>
                    </li>
                    <li>
                        <p>Develop my own identity as an independent creator.</p>
                    </li>
                </ul>
                <br />
                <p>
                    I don't have everything figured out yet,
                    and that's part of the process. I'm
                    learning, experimenting, making mistakes,
                    and improving one project at a time.
                </p>
                <br />
                <p>
                    This is my journey so far, not the
                    finish line. There are still many
                    ideas to explore, bugs to fix, games
                    to build, and worlds to create.
                </p>
                <br />
                <h3>Thanks for being part of the journey!</h3>
                <br />
                <p>
                    Want to explore what I've built so far?
                    Visit my <Link to="/projects/games">Games</Link>{' '}
                    and <Link to="/projects/programs">Programs</Link>{' '}
                    pages, or reach out through my{' '}
                    <Link to="/contact">Contact</Link> page.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Journey;
