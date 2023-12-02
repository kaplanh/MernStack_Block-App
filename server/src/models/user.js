"use strict";
/* -------------------------------------------------------
    USERS BLOG APP
------------------------------------------------------- */
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "aA?123456",
    "email": "admin@site.com",
    "first_name": "admin",
    "last_name": "admin",
    "image":"",
    "bio":"",
    "isAdmin": true
}
/* ------------------------------------------------------- */
const { Schema, model } = require("mongoose");
const validator = require("validator"); // for Validate process : npm i validator
const passwordEncrypt = require("../helpers/passwordEncrypt");
// User Model:
const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            index: true,
            dataType: "string",
            exampleUsing: "title:test1",
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            index: true,
            // validate: [validator.isEmail, "Email type is not correct"],
        },
        emailVerified: {
            type: Boolean,
            default: false,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        first_name: {
            type: String,
            trim: true,
            required: true,
        },
        last_name: {
            type: String,
            trim: true,
            required: true,
        },
        image: {
            type: String,
            trim: true,
        },
        bio: {
            type: String,
            trim: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { collection: "users", timestamps: true }
);
/* ------------------------------------------------------- */
// Schema Configs:
UserSchema.pre(["save", "updateOne"], function (next) {
    const data = this?._update || this;
    const isEmailValidated = data.email ? validator.isEmail(data.email) : true;
    if (isEmailValidated) {
        if (data?.password) {
            const isPasswordValidated =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/.test(
                    data.password
                );

            if (isPasswordValidated) {
                this.password = data.password = passwordEncrypt(data.password);
                this._update = data; // updateOne will wait data from "this._update".
            } else {
                next(new Error("Password not validated."));
            }
        }

        next(); // Allow to save.
    } else {
        next(new Error("Email not validated."));
    }
});
UserSchema.pre("init", function (data) {
    data.id = data._id;
});
/* ------------------------------------------------------- */
module.exports = model("User", UserSchema);
