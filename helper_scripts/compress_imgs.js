import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const imageCategories = [
    "customers",
    "dishes",
    "misc",
    "restaurant",
    "specials"
]

const compressImages = async () => {
    for (let category of imageCategories) {
        await imagemin([`images/original/${category}/*`], {
            destination: `images/compressed/${category}`,
            plugins: [
                imageminWebp({
                    preset: "photo",
                    quality: 80
                })
            ]
        });
        console.log(`Images of ${category} compressed`);
    };
};

compressImages();
