import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";

import useStyles from "./styles";

const CartItem = function({item, onUpdate, onRemove}) {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.image.filename} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">
                    {item.name}
                </Typography>
                <Typography variant="h5">
                    {item.line_total.formatted_with_code}
                </Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=>onUpdate(item.id, item.quantity-1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=>onUpdate(item.id, item.quantity+1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=>onRemove(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;