import React from "react";
import { Card, CardContent, Box, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import one from "../one.webp"

const CardList = () => {
  const cards = [
    {
      id: 1,
      image: one,  // Replace with your images
      title: "Gulberg Inn Hotel Lahore",
      location: "Gulberg, Lahore",
      description: "Set in Lahore, 29 km from Wagah Border, Gulberg Inn Hotel Lahore offers accommodation with a garden, free private parking, a shared lounge, and a terrace.",
      distance: "7.4 km from centre",
      rating: "7.9",
      reviews: "27 reviews",
    },
    {
      id: 2,
      image: one,  // Replace with your images
      title: "Elysium Royale Apartments",
      location: "Gulberg, Lahore",
      description: "Elysium Royale offers luxury apartments with stunning views of Lahore. Featuring modern amenities and a peaceful atmosphere.",
      distance: "5.0 km from centre",
      rating: "8.5",
      reviews: "50 reviews",
    },
    {
      id: 3,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 4,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 5,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 6,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 7,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 8,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 9,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 10,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 11,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 12,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 13,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 14,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 15,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 16,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 17,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 18,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 19,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 20,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 21,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 22,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 23,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 24,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 25,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 26,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 27,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 28,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 29,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    {
      id: 30,
      image: one,  // Replace with your images
      title: "Lahore Royal Suites",
      location: "Lahore, Pakistan",
      description: "Luxurious suites located in the heart of Lahore with top-tier facilities and close to popular attractions.",
      distance: "3.2 km from centre",
      rating: "8.7",
      reviews: "32 reviews",
    },
    // Add more card objects here for other 7 cards...
  ];

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} className="mb-4 border py-3">
          <div className="row g-0">
            <div className="col-md-4 position-relative">
              <img
                src={card.image}
                className="img-fluid rounded"
                alt={card.title}
              />
              <FavoriteBorderIcon className="fs-3 text-secondary position-absolute top-0 end-0 me-4 mt-1 p-1 bg-white rounded-5" />
            </div>
            <div className="col-md-6">
              <CardContent>
                <div className="d-flex justify-content-between align-items-start">
                  <Box className="d-flex align-items-center">
                    <h5 className="text-primary fw-bold" style={{ margin: 0 }}>
                      {card.title}
                      <StarIcon className="text-warning fs-6" />
                      <StarIcon className="text-warning fs-6" />
                      <StarIcon className="text-warning fs-6" />
                      <Typography
                        className="bg-warning rounded-1 p-1"
                        component="span"
                        style={{ display: "inline-flex", alignItems: "center" }}
                      >
                        <ThumbUpAltIcon style={{ fontSize: "14px" }} className=" text-white " />
                        <AddIcon style={{ fontSize: "14px" }} className=" text-white fw-bolder" />
                      </Typography>
                    </h5>
                  </Box>
                </div>

                <Box className="d-flex">
                  <p style={{ textDecoration: "underline", fontSize: "14px" }} className="text-primary">
                    {card.location}
                  </p>
                  <p className="text-primary" style={{ textDecoration: "underline", fontSize: "14px" }}>
                    Show on map
                  </p>

                  <p style={{ fontSize: "14px" }}>{card.distance}</p>
                </Box>
                <Typography className="text-start" style={{ fontSize: "14px" }}>
                  {card.description}
                </Typography>
              </CardContent>
            </div>
            <div className="col-md-2 pt-3">
              <Box className="d-flex align-items-center ps-4">
                <Box className="d-flex flex-column">
                  <Typography className="fw-bold" style={{ fontSize: "16px" }}>
                    Good
                  </Typography>
                  <Typography className="text-secondary" style={{ fontSize: "12px" }}>
                    {card.reviews}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    style={{ fontSize: "14px", backgroundColor: "#003b95" }}
                    className="text-white fw-bold rounded-1 ms-1 py-1 px-1"
                  >
                    {card.rating}
                  </Typography>
                </Box>
              </Box>
              <Button className="bg-warning text-black" style={{ fontSize: "10px", padding: "3px", margin: "0" }}>
                New to Booking.com
              </Button>
              <Button style={{ fontSize: "12px", padding: "6px", margin: "0", marginTop: "12px" }} className="fw-bold bg-primary text-white">
                Show prices
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
