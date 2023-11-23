import { Box, Link, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useState, useEffect } from "react";

import { iconStyle } from "../styles/globalStyles";
import { useSelector } from "react-redux";

const Footer = () => {
    // const [weather, setWeather] = useState();

    // ?1.yol
    const [weather, setWeather] = useState();
    const [city, setCity] = useState("hannover");
    const { userInfo } = useSelector((state) => state.auth);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric&lang=de`;

    const getdata = () => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
            });
    };
    useEffect(() => {
        if (userInfo?.email) {
            setCity(localStorage.getItem("userCity") || "berlin");
        } else {
            setCity("hannover");
        }
    }, [userInfo]);

    useEffect(() => {
        getdata();
    }, [URL]);

    // ?2.yol
    //*********window.navigator.geolocation)*********************** */
    if (window.navigator.geolocation && !weather?.base) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log(latitude, longitude);
                var lat = Number(latitude.toFixed());
                var lon = Number(longitude.toFixed());
                const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }&units=metric&lang=de`;

                fetch(URL)
                    .then((res) => res.json())
                    .then((data) => {
                        setWeather(data);
                        // console.log(data);
                    });
            },
            (err) => {
                console.log("kullanici konum izni vermedi");
            }
        );
    }

    return (
        <Box
            sx={{
                // width: 300,
                height: 50,
                backgroundColor: "#FFC018",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                zIndex: 9,
            }}
            position="fixed"
            bottom="0"
            width={"100%"}
        >
            <Box
                sx={{
                    // width: 300,

                    // backgroundColor: "primary.dark",
                    display: { xs: "flex" },

                    justifyContent: "beetween",
                    alignItems: "center",
                }}
            >
                <img
                    src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                    alt={weather?.weather[0].description.toLocaleUpperCase()}
                    title={weather?.weather[0].description.toLocaleUpperCase()}
                />
                <Typography variant="p" color="initial">
                    {weather?.name} {Math.round(weather?.main.temp)}
                    <sup>°C</sup>
                </Typography>
            </Box>
            <Box
                sx={{
                    // width: 300,

                    // backgroundColor: "primary.dark",
                    display: { xs: "flex" },
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* <Typography
                    variant="body1"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,

                        fontWeight: 500,
                        letterSpacing: ".2rem",
                        color: "black",
                    }}
                >
                    Developed by KP
                </Typography> */}
                <Typography
                    variant="body1"
                    nowrap="true"
                    component="a"
                    sx={{
                        mr: 2,

                        fontWeight: 500,
                        letterSpacing: ".2rem",
                        color: "Whblackite",
                    }}
                >
                    {/*//? Copyright © KP {new Date().getFullYear()}  güncel tarih icin*/}
                    Copyright &copy; KP 2023
                </Typography>
            </Box>
            <Box
                sx={{
                    // width: 300,

                    // backgroundColor: "primary.dark",
                    display: { xs: "flex" },

                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mr: 2,
                }}
            >
                <Link
                    href="https://github.com/kaplanh"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                    color="initial"
                    sx={{ "&:hover": { color: "red", bg: "primary" } }}
                    //*üçüncü taraf içeriğine bağlantı verirken her zaman rel="noopener" veya rel="noreferrer" ayarının yapılması önerilir.
                    // *rel="noopener", yeni sayfanın window.opener özelliğine erişmesini engeller ve ayrı bir işlemde çalışmasını sağlar. Bu olmadan, hedef sayfa potansiyel olarak sayfanızı kötü niyetli bir URL'ye yönlendirebilir.
                    //* rel="noreferrer" has the same effect, but also prevents the Referer header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics.
                >
                    <GitHubIcon sx={iconStyle} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/kaplan-h/"
                    underline="hover"
                    color="initial"
                    target="_blank"
                    rel="noopener"
                    // color="initial"
                    sx={{ "&:hover": { color: "red", bg: "primary" } }}
                >
                    <LinkedInIcon sx={iconStyle} />
                </Link>
                <Link
                    href="mailto:kplnhsyn.49@gmail.com/"
                    underline="hover"
                    color="initial"
                    target="_blank"
                    rel="noopener"
                    // color="initial"
                    sx={{ "&:hover": { color: "red", bg: "primary" } }}
                >
                    <MarkEmailReadIcon sx={iconStyle} />
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
