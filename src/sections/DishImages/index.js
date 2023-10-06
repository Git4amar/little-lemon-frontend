import { Image, useBreakpointValue, Center, Box } from "@chakra-ui/react";
import { useAnimationFrame, useScroll, useTransform } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";

const DishImageBox = forwardRef(({ imgSrc, renderState, imagePosProps = () => null }, ref) => {
  return (
    <Center
      ref={ref}
      pos="absolute"
      {...imagePosProps()}
    >
      <Image
        src={imgSrc()}
        alt="An image of a dish"
        h="full"
        fit="cover"
        display={renderState ? "block" : "none"}
      />
    </Center>
  )
})

const DishImages = () => {

  const [renderState, setRenderState] = useState(false);

  const viewPortRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const heroImgRef = useRef(null);
  const reservationButtonRef = useRef(null);
  const specialsHeaderRef = useRef(null);
  const specialCardCarouselRef = useRef(null);
  const reviewHeaderRef = useRef(null);
  const onlineMenuBtnRef = useRef(null);
  const aboutHeaderRef = useRef(null);
  const reviewCardCarouselRef = useRef(null);

  useEffect(() => {
    heroImgRef.current = document.querySelector("#heroImageGI");
    reservationButtonRef.current = document.querySelector("#heroReservationButton");
    specialsHeaderRef.current = document.querySelector("#specials-section>header");
    specialCardCarouselRef.current = document.querySelector("#specials-section #specials-card-carousel");
    reviewHeaderRef.current = document.querySelector("#testimonials-section>header");
    onlineMenuBtnRef.current = document.querySelector("#specials-section button");
    aboutHeaderRef.current = document.querySelector("#about-section>header");
    reviewCardCarouselRef.current = document.querySelector("#testimonials-section #reviews-card-carousel");
    setRenderState(true);
  }, [])

  const image1Props = useBreakpointValue({
    base: () => {
      const heroImgTop = heroImgRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const heroImgBottom = heroImgTop + (heroImgRef.current.getBoundingClientRect().width * 9 / 16)
      return {
        top: `${heroImgBottom + 64}px`,
        left: (heroImgRef.current.getBoundingClientRect().left - 16) + "px",
        h: "18vh"
      }
    },
    md: () => {
      const onlineBtnBottom = reservationButtonRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      return {
        top: `${onlineBtnBottom + 16}px`,
        left: (reservationButtonRef.current.getBoundingClientRect().left - 64) + "px",
        h: "30vh"
      }
    }
  });
  const image2Props = useBreakpointValue({
    base: () => {
      const h = "28vh"
      const specialHeaderTop = specialsHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      return {
        top: `calc(${specialHeaderTop}px - ${h})`,
        right: `calc(100vw - ${heroImgRef.current.getBoundingClientRect().right}px - 16px)`,
        h: h,
      }
    },
    md: () => {
      const h = "40vh"
      const specialHeaderTop = specialsHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      return {
        top: `calc(${specialHeaderTop}px - ${h})`,
        right: `calc(100vw - ${heroImgRef.current.getBoundingClientRect().right}px - 64px)`,
        h: h,
      }
    },
  });
  const image3Props = useBreakpointValue({
    base: () => {
      const reviewHeaderTop = reviewHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const carouselBottom = specialCardCarouselRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = reviewHeaderTop - carouselBottom + 16;
      return {
        top: `${carouselBottom}px`,
        left: (reviewHeaderRef.current.getBoundingClientRect().left - 16) + "px",
        h: h + "px",
        maxH: "24vh"
      }
    },
    md: () => {
      const reviewHeaderTop = reviewHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const menuBtnBottom = onlineMenuBtnRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = reviewHeaderTop - menuBtnBottom;
      return {
        top: `${menuBtnBottom}px`,
        left: (reviewHeaderRef.current.getBoundingClientRect().left - 64) + "px",
        h: h + "px",
        maxH: "28vh"
      }
    },
    xl: () => {
      const reviewHeaderTop = reviewHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const carouselTop = specialCardCarouselRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const cardwithPaddingsH = (280 * 16 / 9) + (2 * 32) + 8;
      const h = reviewHeaderTop - (carouselTop + cardwithPaddingsH);
      return {
        top: `${carouselTop + cardwithPaddingsH}px`,
        left: (reviewHeaderRef.current.getBoundingClientRect().left - 64) + "px",
        h: h + "px",
        maxH: "28vh"
      }
    }
  });
  const image4Props = useBreakpointValue({
    base: () => {
      const reviewHeaderTop = reviewHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const carouselBottom = specialCardCarouselRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = reviewHeaderTop - carouselBottom + 16;
      return {
        top: h > 0.24 * viewPortRef.current.height
          ? `${reviewHeaderTop - (0.24 * viewPortRef.current.height) + 16}px`
          : `${reviewHeaderTop - h + 16}px`,
        right: `calc(100vw - ${reviewHeaderRef.current.getBoundingClientRect().right}px - 16px)`,
        h: h + "px",
        maxH: "24vh"
      }
    },
    md: () => {
      const reviewHeaderTop = reviewHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const reviewHeaderBottom = reviewHeaderRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const menuBtnBottom = onlineMenuBtnRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = reviewHeaderTop - menuBtnBottom;
      return {
        top: h > 0.28 * viewPortRef.current.height
          ? `${reviewHeaderBottom - (0.28 * viewPortRef.current.height)}px`
          : `${reviewHeaderBottom - h}px`,
        right: `calc(100vw - ${onlineMenuBtnRef.current.getBoundingClientRect().right}px - 64px)`,
        h: h + "px",
        maxH: "28vh"
      }
    },
    xl: () => {
      const reviewHeaderTop = reviewHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const reviewHeaderBottom = reviewHeaderRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const carouselTop = specialCardCarouselRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const cardwithPaddingsH = (280 * 16 / 9) + (2 * 32) + 8;
      const h = reviewHeaderTop - (carouselTop + cardwithPaddingsH);
      return {
        top: h > 0.28 * viewPortRef.current.height
          ? `${reviewHeaderBottom - (0.28 * viewPortRef.current.height)}px`
          : `${reviewHeaderBottom - h}px`,
        right: `calc(100vw - ${onlineMenuBtnRef.current.getBoundingClientRect().right}px - 64px)`,
        h: h + "px",
        maxH: "28vh"
      }
    }
  });
  const image5Props = useBreakpointValue({
    base: () => {
      const aboutHeaderTop = aboutHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const reviewCarouselBottom = reviewCardCarouselRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = aboutHeaderTop - reviewCarouselBottom + 16;
      return {
        top: h > 0.24 * viewPortRef.current.height
          ? `${aboutHeaderTop - (0.24 * viewPortRef.current.height)}px`
          : `${aboutHeaderTop - h + 32}px`,
        left: `${aboutHeaderRef.current.getBoundingClientRect().left}px`,
        h: h + "px",
        maxH: "24vh"
      }
    },
    md: () => {
      const aboutHeaderTop = aboutHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const reviewCarouselBottom = reviewCardCarouselRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = aboutHeaderTop - reviewCarouselBottom;
      return {
        top: h > 0.24 * viewPortRef.current.height
          ? `${aboutHeaderTop - (0.24 * viewPortRef.current.height)}px`
          : `${aboutHeaderTop - h}px`,
        left: `${aboutHeaderRef.current.getBoundingClientRect().left - 64 + 16}px`,
        h: h + "px",
        maxH: "24vh"
      }
    }
  });
  const image6Props = useBreakpointValue({
    base: () => {
      const aboutHeaderTop = aboutHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const reviewCarouselBottom = reviewCardCarouselRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = aboutHeaderTop - reviewCarouselBottom + 16;
      return {
        top: `${reviewCarouselBottom}px`,
        right: `calc(100vw - ${aboutHeaderRef.current.getBoundingClientRect().right + 16}px)`,
        h: h + "px",
        maxH: "16vh"
      }
    },
    md: () => {
      const aboutHeaderTop = aboutHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const reviewCarouselBottom = reviewCardCarouselRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = aboutHeaderTop - reviewCarouselBottom;
      return {
        top: `${reviewCarouselBottom}px`,
        right: `calc(100vw - ${onlineMenuBtnRef.current.getBoundingClientRect().right + 64}px)`,
        h: h + "px",
        maxH: "16vh"
      }
    }
  });
  const image1bProps = useBreakpointValue({
    base: () => {
      const h = "28vh"
      const specialHeaderTop = specialsHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      return {
        top: `calc(${specialHeaderTop}px - ${h} + 32px)`,
        left: `${heroImgRef.current.getBoundingClientRect().left - 16}px`,
        h: h,
        display: viewPortRef.current.height >= 700 ? "block" : "none"
      }
    },
    md: () => {
      const h = "40vh"
      const specialHeaderTop = specialsHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      return {
        top: `calc(${specialHeaderTop}px - ${h})`,
        left: `${reservationButtonRef.current.getBoundingClientRect().left - 64}px`,
        h: h,
      }
    },
  });
  const image2bProps = useBreakpointValue({
    base: () => {
      const heroImgTop = heroImgRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const heroImgBottom = heroImgTop + (heroImgRef.current.getBoundingClientRect().width * 9 / 16);
      return {
        top: `${heroImgBottom + 16}px`,
        right: `calc(100vw - ${heroImgRef.current.getBoundingClientRect().right + 16}px)`,
        h: "18vh",
        display: viewPortRef.current.height >= 700 ? "block" : "none"
      }
    },
    md: () => {
      const heroImgTop = heroImgRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const heroImgBottom = heroImgTop + (heroImgRef.current.getBoundingClientRect().width * 4 / 3);
      return {
        top: `${heroImgBottom + 16}px`,
        right: `calc(100vw - ${heroImgRef.current.getBoundingClientRect().right + 64}px)`,
        h: "16vh"
      }
    },
    xl: () => {
      const heroImgTop = heroImgRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const heroImgBottom = heroImgTop + (heroImgRef.current.getBoundingClientRect().width * 3 / 4);
      return {
        top: `${heroImgBottom + 64}px`,
        left: `${heroImgRef.current.getBoundingClientRect().left}px`,
        h: "16vh"
      }
    }
  });
  const image7Props = useBreakpointValue({
    base: () => {
      return {
        display: "none"
      }
    },
    md: () => {
      const aboutHeaderTop = aboutHeaderRef.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      const aboutHeaderBottom = aboutHeaderRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const reviewCarouselBottom = reviewCardCarouselRef.current.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
      const h = aboutHeaderTop - reviewCarouselBottom;
      return {
        top: h > 0.2 * viewPortRef.current.height
          ? `${aboutHeaderBottom - (0.2 * viewPortRef.current.height)}px`
          : `${aboutHeaderBottom - h}px`,
        right: `calc(100vw - ${onlineMenuBtnRef.current.getBoundingClientRect().right}px)`,
        h: h + "px",
        maxH: "20vh"
      }
    },
    xl: () => {
      return {
        display: "none"
      }
    }
  });

  const img2Ref = useRef(null);
  const image2Scroll = useScroll({
    target: img2Ref,
    offset: ["end", "start"],
  });
  const img2RotationZ = useTransform(
    image2Scroll.scrollYProgress,
    [0, 1],
    [45, 0]
  )
  // useAnimationFrame(() => {
  //   // console.log(image2Scroll.scrollYProgress.current, img2RotationZ.current);
  //   // if (image2Scroll.scrollYProgress.current > 0 && image2Scroll.scrollYProgress.current < 1) {
  //   //   img2Ref.current.style.transform = `rotateZ(${img2RotationZ.current}deg)`;
  //   // }
  // })


  return (
    <>
      {/* extra dish images */}
      <DishImageBox
        imagePosProps={renderState ? image1Props : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_1.png")}
      />
      <DishImageBox
        ref={img2Ref}
        imagePosProps={renderState ? image2Props : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_2.png")}
      />
      <DishImageBox
        imagePosProps={renderState ? image3Props : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_3.png")}
      />
      <DishImageBox
        imagePosProps={renderState ? image4Props : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_4.png")}
      />
      <DishImageBox
        imagePosProps={renderState ? image5Props : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_5.png")}
      />
      <DishImageBox
        imagePosProps={renderState ? image6Props : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_6.png")}
      />
      <DishImageBox
        imagePosProps={renderState ? image7Props : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_7.png")}
      />
      <DishImageBox
        imagePosProps={renderState ? image1bProps : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_1b.png")}
      />
      <DishImageBox
        imagePosProps={renderState ? image2bProps : () => null}
        renderState={renderState}
        imgSrc={() => require("../../assets/dish-images/dish_2b.png")}
      />
    </>
  )
};

export default DishImages;