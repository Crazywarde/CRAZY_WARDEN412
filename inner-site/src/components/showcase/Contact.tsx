
import React from 'react';
import ghIcon from '../../assets/pictures/contact-gh.png';

export interface ContactProps {}

interface SocialBoxProps {
    icon: string;
    link: string;
    label: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon, label }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
        >
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt={label} style={styles.socialImage} />
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>

                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link="https://github.com/wardeniscrazy"
                        label="GitHub"
                    />

                    <a
                        href="https://www.instagram.com/warden_the_creator_og/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="big-button-container" style={styles.social}>
                            <span style={styles.instagramText}>IG</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="text-block">
                <p>
                    Thanks for visiting my portfolio! If you want to explore
                    what I am building, check out my GitHub and Instagram.
                    I enjoy connecting with people who are interested in
                    games, programming, game design and technology.
                </p>

                <br />

                <p>
                    <b>GitHub: </b>
                    <a
                        href="https://github.com/wardeniscrazy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/wardeniscrazy
                    </a>
                </p>

                <br />

                <p>
                    <b>Java Projects: </b>
                    <a
                        href="https://github.com/wardeniscrazy/java"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/wardeniscrazy/java
                    </a>
                </p>

                <br />

                <p>
                    <b>Instagram: </b>
                    <a
                        href="https://www.instagram.com/warden_the_creator_og/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @warden_the_creator_og
                    </a>
                </p>

                <br />

                <p>
                    <b>YouTube: </b>
                    Coming Soon!
                </p>

                <br />

                <p>
                    <b>Discord: </b>
                    Coming Soon!
                </p>

                <br />

                <p>
                    <b>Creator Name: </b>
                    CRAZY_WARDEN412
                </p>

                <br />

                <p>
                    <b>Alternate Username: </b>
                    WARDEN_the_CREATOR
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    socialImage: {
        width: 36,
        height: 36,
    },

    instagramText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E1306C',
    },

    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    social: {
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
};

export default Contact;
