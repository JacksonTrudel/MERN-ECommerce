"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = require("validator");
var isEmpty = require("is-empty");
var MIN_USERNAME_LENGTH = 4;
var MAX_USERNAME_LENGTH = 24;
var MIN_PASSWORD_LENGTH = 6;
var MAX_PASSWORD_LENGTH = 30;
function validate(data) {
    var errors = [];
    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    // Name checks
    if (Validator.isEmpty(data.username)) {
        errors.push("Username field is required");
    }
    if (!Validator.isLength(data.username, { min: MIN_USERNAME_LENGTH, max: MAX_USERNAME_LENGTH })) {
        errors.push("Username length must be between " + MIN_USERNAME_LENGTH + " and " + MAX_USERNAME_LENGTH + " characters");
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.push("Password field is required");
    }
    if (!Validator.isLength(data.password, { min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH })) {
        errors.push("Password length must be between " + MIN_PASSWORD_LENGTH + " and " + MAX_PASSWORD_LENGTH + " characters");
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}
exports.default = validate;
;
//# sourceMappingURL=create-account-validation.js.map