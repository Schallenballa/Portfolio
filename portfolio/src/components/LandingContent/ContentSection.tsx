import React from "react"
import styles from './LandingContent.module.scss'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

interface sectionProps {
    title: string,
    subSections:
        {
            title: string;
            imgUrl: string;
            altImgTag: string;
        }[]
}

export const ContentSection = (sections: sectionProps) => {
    return (
        <>
            <div>
                <h2>{sections.title}</h2>
            </div>
            <div className={styles.sectionContainer}>
                {sections.subSections.map((section) => {
                    return (
                        <Card sx={{ minWidth: 275 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={section.imgUrl}
                                    alt={section.altImgTag}
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {section.title}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}