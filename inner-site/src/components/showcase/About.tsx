
import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm CRAZY_WARDEN412</h3>
            <br />

            <div className="text-block">
                <p>
                    I'm an aspiring independent game developer and creative
                    programmer from India. I enjoy building games, exploring
                    technology, experimenting with code, and turning creative
                    ideas into interactive experiences. I'm always curious
                    about how things work behind the scenes, whether it's a
                    game mechanic, a piece of software, or an entire operating
                    system.
                </p>
                <br />

                <p>
                    Welcome to my little corner of the internet! This portfolio
                    is a collection of my projects, experiments, interests,
                    and everything I'm exploring along my journey. Feel free
                    to look around, discover what I've been working on, and
                    get to know me a little better. If you have any questions
                    or ideas, head over to the{' '}
                    <Link to="/contact">contact page</Link>.
                </p>
            </div>

            <ResumeDownload />

            <div className="text-block">
                <h3>About Me</h3>
                <br />

                <p>
                    I'm passionate about game development and the process
                    of turning an idea into something people can actually
                    play and experience. I enjoy experimenting with gameplay
                    mechanics, player movement, scoring systems, timers,
                    progression systems, and different types of game logic.
                    I like understanding not just how to make something work,
                    but also why it works and how it can be improved.
                </p>
                <br />

                <p>
                    Java is currently my main programming language. I've
                    practiced variables, conditional statements, loops,
                    arrays, ArrayLists, file handling, and object-oriented
                    programming concepts. I've also experimented with Java
                    Swing and JFrame for desktop applications. I use Git
                    and GitHub to manage my projects and explore how other
                    developers structure their code.
                </p>
                <br />

                <p>
                    My programming journey is not just about learning syntax.
                    I enjoy solving problems, debugging errors, understanding
                    algorithms, experimenting with different approaches,
                    and discovering new ways to build things. I'm also
                    interested in exploring more programming languages
                    and development technologies as I continue learning.
                </p>
                <br />

                <p>
                    Some of my projects include Dungeon Loot Explorer,
                    a terminal-based RPG featuring monsters, loot rarity,
                    health, gold, XP, and leveling systems. I've also
                    experimented with arcade-style games such as Snakey,
                    Press Me, Bricky, and SpaceShooter, along with smaller
                    applications like a To-Do List and Warden Bank.
                    You can explore these projects on my{' '}
                    <Link to="/projects/games">Games</Link> and{' '}
                    <Link to="/projects/programs">Programs</Link> pages.
                </p>

                <br />
                <br />

                <div>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Interests</h3>
                        <br />

                        <p>
                            <strong>Playing Video Games:</strong> Gaming is
                            one of my favourite ways to explore new worlds,
                            experience different stories, and discover
                            creative gameplay mechanics. I enjoy seeing how
                            different games approach exploration, progression,
                            challenges, and player interaction. I also like
                            paying attention to the small details that make
                            a game enjoyable and memorable.
                        </p>
                        <br />

                        <p>
                            <strong>Watching Anime:</strong> I'm interested
                            in anime, especially its storytelling, characters,
                            animation styles, fictional worlds, and visual
                            creativity. I enjoy discovering different anime
                            and appreciating how animation can communicate
                            emotions, build interesting characters, and
                            bring imaginative stories to life.
                        </p>
                        <br />

                        <p>
                            <strong>Minecraft:</strong> Minecraft is another
                            game I particularly enjoy. Its creative freedom,
                            block-based world, exploration, building,
                            survival mechanics, and endless possibilities
                            make it interesting to me. I also appreciate
                            its simple visual style and how much creativity
                            can come from such a straightforward concept.
                        </p>
                        <br />

                        <p>
                            <strong>Game Development:</strong> Beyond playing
                            games, I enjoy understanding how they're made.
                            I'm interested in gameplay programming, game
                            systems, mechanics, level design, player
                            interaction, and the technical side of creating
                            games. My goal is to develop my own original
                            games and eventually grow into an independent
                            game developer.
                        </p>
                        <br />

                        <p>
                            <strong>Game Design:</strong> I enjoy thinking
                            about how a game should feel and how its different
                            systems should work together. From movement and
                            controls to difficulty, progression, rewards,
                            and level layouts, I find the creative process
                            behind designing enjoyable gameplay fascinating.
                            I like exploring how small design decisions
                            can change the entire player experience.
                        </p>
                        <br />

                        <p>
                            <strong>Programming:</strong> I genuinely enjoy
                            writing code, experimenting with logic, solving
                            programming challenges, and learning how software
                            is built. Whether I'm creating a small application
                            or working on a game mechanic, I like the process
                            of starting with an idea and gradually turning
                            it into something functional.
                        </p>
                        <br />

                        <p>
                            <strong>PC Hardware:</strong> I'm fascinated by
                            computer hardware and how different components
                            work together. I enjoy exploring processors,
                            graphics cards, RAM, SSDs, cooling systems,
                            performance, and hardware configurations.
                            Understanding how computers operate and what
                            happens behind the scenes is something I find
                            genuinely interesting.
                        </p>
                        <br />

                        <p>
                            <strong>Operating Systems:</strong> I enjoy
                            exploring different operating systems,
                            particularly Windows and Linux. I'm interested
                            in system customization, desktop environments,
                            configurations, drivers, performance, and
                            understanding how an operating system manages
                            hardware and software. I also enjoy experimenting
                            with different Linux distributions.
                        </p>
                        <br />

                        <p>
                            <strong>Open Source Projects:</strong> I enjoy
                            exploring GitHub repositories and discovering
                            how other developers build their applications.
                            Reading source code, understanding project
                            structures, modifying existing projects, and
                            experimenting with new ideas help me learn
                            different programming techniques and improve
                            my own development approach.
                        </p>
                        <br />

                        <p>
                            <strong>3D Modeling & Design:</strong> I'm
                            interested in creating and exploring 3D models,
                            objects, environments, and digital spaces.
                            I like the idea of transforming simple concepts
                            into detailed visual experiences and exploring
                            how 3D elements can be used in games, websites,
                            and other creative projects.
                        </p>
                        <br />

                        <p>
                            <strong>Creative Graphic Design:</strong> I enjoy
                            experimenting with colours, typography, layouts,
                            logos, thumbnails, wallpapers, and visual
                            compositions. I like creating designs that
                            communicate an idea clearly while maintaining
                            their own identity. I'm particularly drawn to
                            clean layouts, creative visuals, and minimal
                            designs with interesting details.
                        </p>
                        <br />

                        <p>
                            <strong>Video Editing:</strong> I enjoy working
                            with video editing software and experimenting
                            with transitions, effects, timing, audio,
                            and visual storytelling. I find it interesting
                            how different editing techniques can transform
                            ordinary clips into engaging content.
                        </p>
                        <br />

                        <p>
                            <strong>Content Creation:</strong> I'm interested
                            in creating digital content, especially around
                            gaming, technology, and creative projects.
                            I enjoy exploring presentation styles, editing
                            ideas, thumbnails, and different ways of making
                            content more interesting and visually appealing.
                        </p>
                        <br />

                        <p>
                            <strong>Japanese Language Learning:</strong>
                            I'm also learning Japanese as a personal
                            interest. I've studied Hiragana and Katakana
                            and enjoy practising vocabulary, grammar,
                            sentence structures, and everyday expressions.
                            I like learning how the language works and
                            gradually improving my ability to read,
                            understand, and communicate in Japanese.
                        </p>
                        <br />

                        <p>
                            <strong>Software Exploration:</strong> I enjoy
                            discovering new applications, development tools,
                            utilities, and software. I like exploring their
                            features, understanding how they work,
                            experimenting with different configurations,
                            and finding interesting ways to use them
                            in my everyday workflow.
                        </p>
                        <br />

                        <p>
                            <strong>Technology Experiments:</strong> I'm
                            always interested in trying something new.
                            Whether it's testing unfamiliar software,
                            exploring system configurations, experimenting
                            with development tools, or understanding a
                            new technical concept, I enjoy learning through
                            hands-on experimentation. Sometimes the most
                            interesting discoveries come from simply
                            exploring something I've never tried before.
                        </p>
                    </div>
                </div>

                <br />
                <br />

                <h3>My Goals</h3>
                <br />

                <p>
                    My goal is to keep improving as a programmer, develop
                    my understanding of game design, and create original
                    games that reflect my own ideas and creativity.
                    I also want to explore more technologies, contribute
                    to interesting projects, and build things that I'm
                    genuinely proud of. I'm still learning, experimenting,
                    and discovering my own path, and I see every project
                    as another opportunity to improve.
                </p>
                <br />

                <p>
                    This is only the beginning of my journey. There are
                    plenty of ideas to explore, projects to build, and
                    things left to learn. Thanks for taking the time to
                    explore my portfolio, and good luck finding the
                    Easter egg!
                </p>
                <br />

                <p>
                    If you have any questions, suggestions, or interesting
                    ideas, I'd love to hear from you. You can reach me
                    through the{' '}
                    <Link to="/contact">contact page</Link>.
                </p>
            </div>
        </div>
    );
};

export default About;
