// for email validation
export const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// for name validation
export const nameRegExp = /^([a-zA-Z ]){2,30}$/;

// for cvv validation
export const cvvRegExp = /^[0-9]{3}$/;

// for converting number into with dashed
export const cardNumberRegExp = /^(\d{0,4})(\d{0,4})(\d{0,4})$/;

// for converting expireData into with dashed
export const expDateRegExp = /^(\d{2})(\d{2})$/;
