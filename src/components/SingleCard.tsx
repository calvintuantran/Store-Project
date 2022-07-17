import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles"; // import since issue with type never for create styles
//Styles

//Styling for Layout
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const useStyles = makeStyles({
  card: {
    boxShadow: "4px 5px #888888",
    //20px margin left and right
    margin: "20px",
  },
  icon: {
    display: "flex",
    justifyContent: 'center,'
  },
});

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

interface PropsParameter {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  index: number;
  deleteHandler: (id: number) => void;
  deleteAllHandler?: () => void;
}

const MultiActionAreaCard: React.FC<PropsParameter> = ({
  title,
  image,
  price,
  description,
  id,
  index,
  deleteHandler,
  deleteAllHandler,
}) => {
  //importing styles into the card
  const classes = useStyles();

  const customIcons: {
    [index: string]: {
      icon: React.ReactElement;
      label: string;
    };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
  };

  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${title.substring(0, 23)}...`}
          </Typography>
          <Typography variant="h5" color={"#3388FF"}>
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${description.substring(0, 131)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <StyledRating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        getLabelText={(value: number) => customIcons[value].label}
        highlightSelectedOnly
        sx ={{ display:'flex',justifyContent:'center'}}
      />
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button
          onClick={() => {
            deleteHandler(id);
          }}
          size="small"
          color="error"
        >
          Delete Item
        </Button>
        <Button onClick={deleteAllHandler} color="warning">
          Delete All
        </Button>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
