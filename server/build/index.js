"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var db_1 = __importDefault(require("./config/db"));
var accounts_1 = __importDefault(require("./routes/api/accounts"));
// Boot express
var app = (0, express_1.default)();
var port = 5000;
// connect DB
(0, db_1.default)(app);
// init middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// cors
app.use((0, cors_1.default)({ origin: true, credentials: true }));
// Application routing
app.use('/test', function (req, res, next) {
    res.status(200).send({ data: 'Passed!' });
});
// set up routes
app.use('/accounts', accounts_1.default);
// Start server
app.listen(port, function () { return console.log("Server is listening on port " + port + "!"); });
//# sourceMappingURL=index.js.map