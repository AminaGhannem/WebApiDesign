"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var morgan_1 = __importDefault(require("morgan"));
var auth_1 = require("./modules/auth");
var user_1 = require("./handlers/user");
var app = (0, express_1["default"])();
app.use((0, morgan_1["default"])('dev'));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
// app.use((req,res,next)=>{
//     res.status(401)
//     res.send('nope')
// })
app.get('/', function (req, res, next) {
    // console.log('Hello from express')
    // res.status(200).send('Hello from express')
    res.json({ message: 'amina' });
    // setTimeout(()=>{
    //     next( new Error('oops'))
    // },1)
});
app.use('/api', auth_1.protect, router_1["default"]);
app.post('/user', user_1.createNewUser);
app.post('/signin', user_1.signin);
app.use(function (err, req, res, next) {
    if (err.type == 'auth') {
        res.status(401).json({ message: 'unauthorised' });
    }
    else if (err.type === 'input') {
        res.status(400).json({ message: 'invalid input' });
    }
    else {
        res.status(500).json({ message: 'oops that is on us' });
    }
});
exports["default"] = app;
//# sourceMappingURL=server.js.map