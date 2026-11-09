import React from 'react';
import galleryPhotos from '../../assets/pictures/gallery';

export interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
    return (
        <div className="text-block">
            <h3>Gallery</h3>
            <br />
            <div style={styles.grid}>
                {galleryPhotos.map((photo) => (
                    <div key={photo.caption} style={styles.item}>
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            style={styles.img}
                        />
                        <p style={styles.caption}>{photo.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: 16,
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
    },
    img: {
        width: '100%',
        height: 220,
        objectFit: 'cover',
    },
    caption: {
        marginTop: 6,
        fontSize: 14,
        textAlign: 'center',
    },
};

export default Gallery;
