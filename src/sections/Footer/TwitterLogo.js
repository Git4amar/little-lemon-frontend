import { Link } from "@chakra-ui/react";
import Lottie from "lottie-react";
import twitterLogo from "../../assets/logo/facebook-social.json";

const TwitterLogo = () => {

    const interactivity = {
        mode: "cursor",
        actions: [
            {
                position: { x: [0, 1], y: [0, 1] },
                type: "loop",
                frames: [0, 48]
            },
            {
                position: { x: -1, y: -1 },
                type: "stop",
                frames: [0]
            }
        ]
    };

    return (
        <Link
            target="_blank"
            href="https://www.facebook.com/"
        >
            <Lottie
                animationData={twitterLogo}
                style={{ height: "64px" }}
                interactivity={interactivity}
            />
        </Link>

    )
}

export default TwitterLogo;