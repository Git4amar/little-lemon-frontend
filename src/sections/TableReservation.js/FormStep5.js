import { HStack, Heading } from "@chakra-ui/react";
import FormCTAButton from "./FormUI/FormCTAButton";
import FormStepFrame from "./FormStepFrame";
import ReservationReviewItem from "./FormUI/ReservationReviewItem";
import { useEffect, useState } from "react";


const dayjs = require("dayjs");

const FormStep5 = ({ stepDetails, formStatus, setFormStatus, goToPreviousFormStep }) => {

    const reviewItems = [
        {
            item: "Party size",
            fieldName: "numOfGuests"
        },
        {
            item: "Date",
            fieldName: "reservationDay"
        },
        {
            item: "Moment",
            fieldName: "reservationMoment"
        },
        {
            item: "Time",
            fieldName: "reservationTime"
        },
        {
            item: "Disability accomodations",
            fieldName: "disabilityAccomodation"
        },
        {
            item: "Seating preference",
            fieldName: "seatingOptions"
        },
        {
            item: "Occasion",
            fieldName: "occasion"
        },
        {
            item: "Additional info",
            fieldName: "additionalInfo"
        },
        {
            item: "Your name",
            fieldName: "firstname, lastname"
        },
        {
            item: "Your email",
            fieldName: "email"
        },
        {
            item: "Credit card",
            fieldName: "cardNumber"
        },
    ]

    const [formData, setFormData] = useState(null);

    useEffect(() => {
        formStatus.stepInProgress === 5
            &&
            setFormData({
                ...JSON.parse(sessionStorage.getItem("tableReservationStep1")),
                ...JSON.parse(sessionStorage.getItem("tableReservationStep2")),
                ...JSON.parse(sessionStorage.getItem("tableReservationStep3")),
                ...JSON.parse(sessionStorage.getItem("tableReservationStep4")),
            });
    }, [formStatus.stepInProgress])

    return (
        <FormStepFrame
            stepHeading={stepDetails.stepHeading}
        >
            {formData
                &&
                reviewItems.map(reviewItem => {
                    let desc = null;
                    if (reviewItem.item.includes("name")) {
                        desc = formData[reviewItem.fieldName.split(",")[0].trim()] + " " + formData[reviewItem.fieldName.split(",")[1].trim()]
                    }
                    else if (reviewItem.item.includes("Date")) {
                        desc = dayjs(formData[reviewItem.fieldName], "YYYY-MM-DD").format("dddd, MMMM D, YYYY")
                    }
                    else if (reviewItem.item.includes("Moment")) {
                        desc = formData[reviewItem.fieldName].split(" ")[0]
                    }
                    else {
                        desc = formData[reviewItem.fieldName]
                        desc = typeof (desc) === "boolean" ? desc.toString() : desc
                    }
                    return desc && <ReservationReviewItem
                        key={reviewItem.item}
                        item={reviewItem.item}
                        desc={desc}
                    />
                })
            }
            {/* reservation price info */}
            <Heading
                as="h4"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight={400}
                lineHeight="150%"
            >
                We'll place a temporary charge of $10.00 on your card. <br />Click reserve to finalize.
            </Heading>
            {/* CTA button Stack */}
            <HStack
                w="full"
                spacing={4}
            >
                <FormCTAButton
                    value={stepDetails.stepNum}
                    onClick={goToPreviousFormStep}
                >
                    Previous
                </FormCTAButton>
                <FormCTAButton
                    primary
                    type="submit"
                >
                    Reserve
                </FormCTAButton>
            </HStack>
        </FormStepFrame>
    )
}

export default FormStep5;