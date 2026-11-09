import pixelStrategyGame from './pixel-strategy-game.jpg';
import workWithNature from './work-with-nature.jpg';
import moreGamesAtWork from './more-games-at-work.jpg';
import codeCompileRepeat from './code-compile-repeat.jpg';
import javaCatThinking from './java-cat-thinking.jpg';
import javaCatAwt from './java-cat-awt.jpg';
import blenderNightGarden from './blender-night-garden.jpg';
import blenderCourtyard from './blender-courtyard.jpg';

export interface GalleryPhoto {
    src: string;
    caption: string;
}

const galleryPhotos: GalleryPhoto[] = [
    { src: pixelStrategyGame, caption: 'Game night' },
    { src: workWithNature, caption: 'Work with nature' },
    { src: codeCompileRepeat, caption: 'Code, compile, repeat' },
    { src: blenderNightGarden, caption: '3D scene in Blender' },
    { src: javaCatThinking, caption: 'Debugging Java...' },
    { src: moreGamesAtWork, caption: 'More games at work' },
    { src: javaCatAwt, caption: 'Java AWT basics' },
    { src: blenderCourtyard, caption: 'Blender courtyard' },
];

export default galleryPhotos;
