import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const imagesToResize = [
    // mobile version specials dishes
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

    // desktop versions restaurant images
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
        path: "images/compressed/restaurant/restaurantfood.webp",
        resizeTo: { width: 466, height: 704 },
        destination: "images/compressed/restaurant/"
    },
    {
        name: "restaurantfood",
        path: "images/compressed/restaurant/restaurantfood.webp",
        resizeTo: { width: 466, height: 704 },
        destination: "images/compressed/restaurant/"
    },

    // desktop verions dishes images
    // {
    //     name: "dish_1",
    //     path: "images/compressed/dishes/dish_1.webp",
    //     resizeTo: { width: 256, height: 229 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_1b",
    //     path: "images/compressed/dishes/dish_1b.webp",
    //     resizeTo: { width: 256, height: 190 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_2",
    //     path: "images/compressed/dishes/dish_2.webp",
    //     resizeTo: { width: 840, height: 777 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_2b",
    //     path: "images/compressed/dishes/dish_2b.webp",
    //     resizeTo: { width: 810, height: 839 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_3",
    //     path: "images/compressed/dishes/dish_3.webp",
    //     resizeTo: { width: 392, height: 392 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_4",
    //     path: "images/compressed/dishes/dish_4.webp",
    //     resizeTo: { width: 632, height: 632 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_5",
    //     path: "images/compressed/dishes/dish_5.webp",
    //     resizeTo: { width: 359, height: 345 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_6",
    //     path: "images/compressed/dishes/dish_6.webp",
    //     resizeTo: { width: 256, height: 167 },
    //     destination: "images/compressed/dishes/"
    // },
    // {
    //     name: "dish_7",
    //     path: "images/compressed/dishes/dish_7.webp",
    //     resizeTo: { width: 128, height: 128 },
    //     destination: "images/compressed/dishes/"
    // },
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