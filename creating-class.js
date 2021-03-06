"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes
console.log('classes');
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.type = "";
        this.age = 15;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("admin");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("billi", "salmonelopan");
console.log(person.name, person.userName);
person.printAge();
// person.setType("admin"); won't work cause is private
// inheritance
console.log('inheritance');
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = "Billi";
    function Max(username) {
        var _this = _super.call(this, "Alex", username) || this;
        _this.age = 34;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("anaaa");
console.log(max);
// getters and setters => GET && SET
console.log('getters and setters');
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); //=> this is how we GET the value in the class
plant.species = "Green Plant"; //=> this is how we SET the value in the class
console.log(plant.species);
// plant.species("sssss");
// console.log(plant.species);
// Statics properties and methods
// without instance it the class we can use a value or methods from a class, writing static before the declaration 
console.log('Statics properties and methods');
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(3));
// Abstract classes
console.log('Abstract classes');
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "default";
        this.budget = 13;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ItProject = /** @class */ (function (_super) {
    __extends(ItProject, _super);
    function ItProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ItProject;
}(Project));
var newProject = new ItProject();
console.log(newProject);
newProject.changeName("super it project");
console.log(newProject);
// Private Constructor
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong  = new OnlyOne('The only one');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = "hellooo";  this cannot be used cause is readonly property
