import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
    Button,
    CardActionArea,
    CardActions,
    Paper,
    Grid,
    Icon,
    Stack,
} from "@mui/material";
import { avatar } from "../../assets/avatar";

const About = () => {
    return (
        <Paper
            sx={{
                display: "flex",

                p: 2,
                m: 8,
                alignItems: "center",
                justifyContent: "center",
                height: "70vh",
            }}
            elevation={5}
        >
            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={avatar}
                        alt="profile img"
                        sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Hi, I'm Hüseyin
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I'm currently learning different full-stack
                            development languages.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I already know python, JavaScript, ReactJS, Next.js
                            and typescript
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            💬 You can ask me anything you want to know
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Button
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                    >
                        <LinkedInIcon />
                    </Button>
                    <Button
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                    >
                        <TwitterIcon />
                    </Button>
                    <Button
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                    >
                        <InstagramIcon />
                    </Button>
                    <Button
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                    >
                        <YouTubeIcon />
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
};

export default About;
