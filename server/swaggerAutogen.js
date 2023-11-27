"use strict";
//* $npm i swagger-autogen
// Swagger-UI:
// *npm i swagger-ui-express
// Redoc:
//* npm i redoc-express

const swaggerAutogen = require("swagger-autogen")();




const packageJson = require("./package.json");

require("dotenv").config();
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 8000;

const document = {
    info: {
        version: packageJson.version,
        title: packageJson.title,

        description: packageJson.description,
        termsOfService: '"http://www.clarusway.com/#"',
        contact: { name: packageJson.author, email: "kplnhsyn.49@gmail.com" },
        license: packageJson.license,
    },
    host: `${HOST}:${PORT}`,
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
        Token: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description:
                "SimpleToken Auth * Example: <b>Token <i>...tokenKey...<i></b>",
        },
    },
    security: [{ Token: true }],
    definition: {
        // Models:
        User: require("./src/models/user").schema.obj,
        Blog: require("./src/models/blog").schema.obj,
        Category: require("./src/models/category").schema.obj,
        Comment: require("./src/models/comment").schema.obj,
        Like: require("./src/models/like").schema.obj,
        View: require("./src/models/view").schema.obj,
    },
};
const routes = ["./index.js"];
const outputFile = "./src/configs/swagger.json";





swaggerAutogen(outputFile, routes, document);
