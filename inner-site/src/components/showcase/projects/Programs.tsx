import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface ProgramsProjectsProps {}

const ProgramsProjects: React.FC<ProgramsProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Programs</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Not everything I build is a game. These Java programs helped me
                learn the fundamentals that every game also needs.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>To-Do List</h2>
                <br />
                <p>
                    A Java task manager that saves its tasks to a tasks.txt
                    file, so they are still there the next time you open it.
                </p>
                <br />
                <ul>
                    <li>
                        <p>Basic task management.</p>
                    </li>
                    <li>
                        <p>File handling for saving and loading tasks.</p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Warden Bank</h2>
                <br />
                <p>
                    Warden Bank is a Java banking project that I built as part
                    of my Java learning journey.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default ProgramsProjects;
