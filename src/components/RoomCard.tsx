import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const RoomCard: React.FC = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="265"
                image="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
                alt="room"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Patrik
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                    ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h4" sx={{ fontWeight: 300 }} component="p">
                    100
                    <Typography sx={{ ml: '5px' }} component="span" variant="subtitle2">
                        участников
                    </Typography>
                </Typography>
                <Button variant="contained">Присоединиться</Button>
            </CardActions>
        </Card>
    );
};
