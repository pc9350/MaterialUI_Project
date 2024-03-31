import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar, Typography, Checkbox } from '@mui/material'
import { Favorite, Share, MoreVert, FavoriteBorder } from '@mui/icons-material';
import React from 'react'
import "./Post.css"
import img from "../assets/img.jpg"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Post = () => {
    return (
        <Card className='post-card' sx={{margin:10}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        E
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Empire_Explorer"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="10%"
                image= {img}
                alt="City"
                className='post-image'
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    New York, a bustling hub of culture and innovation, is home to iconic landmarks like Times Square and Central Park. From the energy of New York City to the scenic beauty of the Adirondack Mountains, the state offers a captivating blend of urban excitement and natural splendor. Come explore the "Empire State" and discover something extraordinary!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post