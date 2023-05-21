
// converted date into dd-mm-yyyy

export const getDateIntoDDMMYYY = (date) => {
    const [year, month, day] = date.split('-');
    const formatedDate = `${day}-${month}-${year}`;
    return formatedDate;
};
