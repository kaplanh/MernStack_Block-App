import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";

export default function Profile() {
    const { userInfo } = useSelector((state) => state.auth);
    const { blogs } = useSelector((state) => state.blog);
    return (
        <Paper
            sx={{
                display: "flex",

                p: 2,
                m: 8,
                alignItems: "center",
                justifyContent: "center",
                minHeight: "63vh",
            }}
            elevation={5}
        >
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    alt={userInfo?.username}
                    height="200"
                    image={userInfo?.image}
                    sx={{ objectFit: "contain" }}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {userInfo?.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {userInfo?.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {userInfo?.bio}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
}
