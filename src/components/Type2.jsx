import React from 'react'
import { DeliveryLogo } from "../utils/constants";
import DishCard from "./DishCard";
const Type2 = (props) => {
        const info=props?.cards[2]?.card?.card?.info;
        const topPicks=props?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        console.log(topPicks);
  return (
    <div className="menu">
            <div className="res-head">
                <h1>{info?.name}</h1>
                <div className="res-div">
                    <h3>⭐{info?.avgRating} ({info?.totalRatingsString})</h3>
                    <h3>{info?.costForTwoMessage}</h3>
                </div>
                <div className="res-div">
                    <h3>OutLet: {info?.locality}</h3>
                    <div>
                    <img src={DeliveryLogo}/>
                    <h3> Deliver in {info?.sla.deliveryTime} min</h3>
                    </div>
                    <h3>{info?.cuisines.join(", ")}</h3>
                </div>
            </div>
            <h2>{topPicks.title}</h2>
            <div className="topPicks">
                {topPicks?.carousel?.map((cas)=>{
                   return(
                    <DishCard key={cas?.bannerId} {...cas?.dish?.info}/>
                   )
                })}
            </div>
        </div>
  )
}

export default Type2;