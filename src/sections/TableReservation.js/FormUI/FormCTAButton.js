import { useFormikContext } from "formik";
import ButtonRegular from "../../../components/Buttons/ButtonRegular";
import { useEffect } from "react";


const FormCTAButton = ({ primary = false, children, formStatus, setFormStatus, stepNum, formikInitialValues, ...props }) => {

    const { isValid, setValues } = useFormikContext();

    const handleFormReset = () => {
        sessionStorage.removeItem(`tableReservationStep${stepNum}`);
        setValues(formikInitialValues);
    }

    useEffect(() => {
        if (formStatus && setFormStatus) {
            switch (isValid) {
                case true:
                    setFormStatus(prev => {
                        formStatus.stepsInvalid.delete(stepNum);
                        return {
                            ...prev,
                            stepsInvalid: formStatus.stepsInvalid
                        }
                    });
                    break;
                default:
                    setFormStatus(prev => {
                        const tempArr = [...formStatus.stepsInvalid.add(stepNum)];
                        tempArr.sort();
                        return {
                            ...prev,
                            stepsInvalid: new Set(tempArr)
                        }
                    });
            }
        }
        //eslint-disable-next-line
    }, [isValid])

    return (
        <ButtonRegular
            isDisabled={props.type === "submit" ? !isValid : false}
            w="full"
            bg={primary ? "brand.primary.green" : "brand.secondary.brightGray"}
            color={primary ? "brand.primary.yellow" : "brand.primary.green"}
            borderRadius="8px"
            _active={{
                color: primary ? "brand.secondary.brightGray" : "brand.primary.green",
                boxShadow: "0px 0px 0px 0px #33333380",
                transform: "translateY(1px)",
                border: primary ? null : "1px"
            }}
            {...props}
            // to avoid formik bug formik i.e isValid doesn't change on resetForm
            type={props.type === "submit" ? "submit" : "button"}
            onClick={props.type === "reset" ? handleFormReset : props.onClick}
        >
            {children}
        </ButtonRegular>
    )
}

export default FormCTAButton;