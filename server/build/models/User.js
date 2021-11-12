"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// User model
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    joined_date: {
        type: Date,
        deault: Date.now
    }
});
var User = mongoose_1.default.model('user', UserSchema);
exports.default = User;
//# sourceMappingURL=User.js.map