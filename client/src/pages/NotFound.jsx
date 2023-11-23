import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/404.png"
import { Button, Container, Stack } from "@mui/material";

const NotFound = () => {
    let navigate = useNavigate();
    return (
        <Container>
            <img className="w-75" src={errorImg} alt="" />
            <Stack
                flexDirection={"row"}
                gap={5}
                justifyContent={"center"}
                p={10}
            >
                <Button
                    onClick={() => navigate("/")}
                    sx={{
                        color: "white",
                        backgroundColor: "red",
                        // "&:hover": { backgroundColor: "lightpink" },
                    }}
                    size="large"
                    variant="contained"
                >
                    Home
                </Button>
                <Button
                    onClick={() => navigate(-1)}
                    sx={{
                        color: "white",
                        backgroundColor: "green",
                        // "&:hover": { backgroundColor: "lightpink" },
                    }}
                    size="large"
                    variant="contained"
                >
                    Go Back
                </Button>
            </Stack>
        </Container>
    );
};

export default NotFound;
