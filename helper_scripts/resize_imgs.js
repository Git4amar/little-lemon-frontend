import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const imagesToResize = [
    // mobile versions
    {
        name: "greek-salad",
        path: "images/compressed/specials/greek-salad.webp",
        resizeTo: { width: 560, height: 373 },
        destination: "images/compressed/specials/mobile/"
    },
    {
        name: "bruschetta",
        path: "images/compressed/specials/bruschetta.webp",
        resizeTo: { width: 560, height: 373 },
        destination: "images/compressed/specials/mobile/"
    },
    {
        name: "lamb-chops",
        path: "images/compressed/specials/lamb-chops.webp",
        resizeTo: { width: 560, height: 560 },
        destination: "images/compressed/specials/mobile/"
    },
    {
        name: "mushroom-pitas",
        path: "images/compressed/specials/mushroom-pitas.webp",
        resizeTo: { width: 560, height: 560 },
        destination: "images/compressed/specials/mobile/"
    },

    // desktop versions
    {
        name: "owner-image-A",
        path: "images/compressed/restaurant/owner-image-A.webp",
        resizeTo: { width: 250, height: 445 },
        destination: "images/compressed/restaurant/"
    },
    {
        name: "owner-image-B",
        path: "images/compressed/restaurant/owner-image-B.webp",
        resizeTo: { width: 250, height: 445 },
        destination: "images/compressed/restaurant/"
    },
    {
        name: "owner-image-C",
        path: "images/compressed/restaurant/owner-image-C.webp",
        resizeTo: { width: 376, height: 668 },
        destination: "images/compressed/restaurant/"
    },
    {
        name: "restaurant",
        path: "images/compressed/restaurant/restaurant.webp",
        resizeTo: { width: 466, height: 311 },
        destination: "images/compressed/restaurant/"
    },
    {
        name: "restaurantfood",
        path: "src/assets/images/restaurant/restaurantfood.webp",
        resizeTo: { width: 466, height: 704 },
        destination: "images/compressed/restaurant/"
    },
]

const resizeImages = async () => {
    for (let image of imagesToResize) {
        await imagemin([image.path], {
            destination: image.destination,
            plugins: [
                imageminWebp({
                    preset: "photo",
                    resize: image.resizeTo
                })
            ]
        });
        console.log(`${image.name} image risized`);
    }
};

resizeImages();