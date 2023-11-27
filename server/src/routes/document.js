"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/document:

// URL: /documents

router.all("/", (req, res) => {
    res.send({
        swagger: "/documents/swagger",
        redoc: "/documents/redoc",
        json: "/documents/json",
    });
});

//? JSON i görüntülemek icin:
router.use("/json", (req, res) => {
    res.sendFile(`/src/configs/swagger.json`, { root: "." });
});

//? Redocta görüntülemek icin:
// npm i redoc-express
const redoc = require("redoc-express");
router.use(
    "/redoc",
    redoc({
        specUrl: "/documents/json",
        title: "API Docs", // *renk ayarlari icin
        redocOptions: {
            theme: {
                colors: {
                    primary: {
                        main: "#6EC5AB",
                    },
                },
                typography: {
                    fontFamily: `"museo-sans", 'Helvetica Neue', Helvetica, Arial, sans-serif`,
                    fontSize: "15px",
                    lineHeight: "1.5",
                    code: {
                        code: "#87E8C7",
                        backgroundColor: "#4D4D4E",
                    },
                },
                menu: {
                    backgroundColor: "#ffffff",
                },
            },
        },
    })
);


// ?swagger da görüntülemek icin
// Swagger-UI:
// npm i swagger-ui-express
const swaggerUi = require("swagger-ui-express");
router.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(require("../configs/swagger.json"), {
        swaggerOptions: { persistAuthorization: true },
    })
);

/* ------------------------------------------------------- */
module.exports = router;
