"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var comicActions_1 = require("./redux/comic/comicActions");
var Title_1 = require("./components/Title");
require("./App.scss");
var StarRating = function () {
    var _a = react_1.useState(0), rating = _a[0], setRating = _a[1];
    var _b = react_1.useState(0), hover = _b[0], setHover = _b[1];
    react_1.useEffect(function () {
        console.log(rating);
    }, [rating]);
    return (React.createElement("div", { className: "star-rating" }, __spreadArrays(Array(5)).map(function (star, index) {
        index += 1;
        return (React.createElement("button", { type: "button", key: index, className: index <= (hover || rating) ? "on" : "off", onClick: function () { return setRating(index); }, onMouseEnter: function () { return setHover(index); }, onMouseLeave: function () { return setHover(rating); } },
            React.createElement("span", { className: "star" }, "\u2605")));
    })));
};
function App(_a) {
    var userData = _a.userData, fetchData = _a.fetchData;
    react_1.useEffect(function () {
        fetchData();
    }, []);
    var obj = Object.assign([], userData);
    console.log(obj);
    return (React.createElement("div", { className: "App" },
        React.createElement(Title_1["default"], { title: "" }),
        React.createElement("pre", null, JSON.stringify(userData, null, 2)),
        React.createElement(StarRating, null)));
}
var mapStateToProps = function (state) {
    return {
        userData: state
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function () { return dispatch(comicActions_1.fetchData()); }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
