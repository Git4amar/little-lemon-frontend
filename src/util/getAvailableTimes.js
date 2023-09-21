const getAvailableTimes = (reservationMoment, initialValue) => {

    const numOfOptions = Math.floor(Math.random() * (14 - 8 + 1)) + 8;
    const newTimeOptions = initialValue ? [initialValue] : [];
    const mins = ["00", "15", "30", "45"];

    switch (reservationMoment) {
        case "Breakfast":
            while (newTimeOptions.length <= numOfOptions) {
                let newOption = `${Math.floor(Math.random() * (11 - 6 + 1)) + 6}:${mins[Math.floor(Math.random() * (mins.length - 0))]} am`;
                if (!newTimeOptions.includes(newOption)) {
                    newTimeOptions.push(newOption);
                }
            }
            break;
        case "Lunch":
            while (newTimeOptions.length <= numOfOptions) {
                let newOption = `${Math.floor(Math.random() * (17 - 12 + 1)) + 12}:${mins[Math.floor(Math.random() * (mins.length - 0))]}`;
                if (!newTimeOptions.includes(newOption)) {
                    newTimeOptions.push(newOption);
                }
            }
            break;
        case "Dinner":
            while (newTimeOptions.length <= numOfOptions) {
                let newOption = `${Math.floor(Math.random() * (23 - 18 + 1)) + 18}:${mins[Math.floor(Math.random() * (mins.length - 0))]}`;
                if (!newTimeOptions.includes(newOption)) {
                    newTimeOptions.push(newOption);
                }
            }
            break;
        default:
            while (newTimeOptions.length <= numOfOptions) {
                let newOption = `${Math.floor(Math.random() * (23 - 16 + 1)) + 16}:${mins[Math.floor(Math.random() * (mins.length - 0))]}`;
                if (!newTimeOptions.includes(newOption)) {
                    newTimeOptions.push(newOption);
                }
            }
    }

    return newTimeOptions;
}

export default getAvailableTimes;