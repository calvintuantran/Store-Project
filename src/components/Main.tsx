import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "./main.css";
import { Grid, Container } from "@mui/material";
import Loading from './loading'

export interface PropsShop {
  id?: any;
  title?: any;
  price?: any;
  description?: any;
  image?: any;
  index?: any;
  deleteHandler?: () => void;
  deleteAllHandler?: () => void;
}

//Styling
const Main: React.FC<PropsShop> = (props: PropsShop) => {
  const [shop, setShop] = useState<PropsShop[]>([]);
  const [loader,setLoader] = useState<Boolean>(true)
  
  
  const grabData = async () => {
    try{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setLoader(false)
    setShop(data);
    }
    catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    grabData();
  }, []);

  const deleteHandler = (id: number) => {
    setShop(shop.filter((item) => item.id !== id));
  };

  const deleteAllHandler =()=>{
    setShop([])
  }

  if(loader){
    return(
      <Loading/>
    )
  }

  return (
    <Grid container>
      {shop.map((card) => {
        return (
          <Grid item key={card.id}>
            <Container maxWidth="sm">
              <SingleCard 
                deleteHandler={deleteHandler}
                deleteAllHandler ={deleteAllHandler}
                title={card.title}
                description={card.description}
                price={card.price}
                image={card.image}
                index={card.index}
                id={card.id}
              />
            </Container>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Main;
