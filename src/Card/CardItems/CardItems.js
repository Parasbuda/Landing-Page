import React from "react"
import "./CardItems.css"
import CardItem from "../CardItem/CardItem"

const CardItems = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Travels through the island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Experience Football on the top of the Himalayas Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="/images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/signup"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardItems
