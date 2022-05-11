import Validator from "validator";
import isEmpty from "./isEmpty.js";

export const creatNFTvalidator = (data) => {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : "";
    data.startingPrice = !isEmpty(data.startingPrice) ? data.startingPrice : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }
    if (Validator.isEmpty(data.startingPrice)) {
        errors.startingPrice = "Starting Price is required";
    }

    return {
        errors,
        isValid: isEmpty(errors),
      };
}