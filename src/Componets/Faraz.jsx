import React from "react";
import { Card, Button, CardContent, Box, Typography } from "@mui/material"; // Correct import
import Badge from "@mui/material/Badge"; // Correct import
import one from "../Componets/one.webp"
import two from "../Componets/two.webp"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardList from "./Cards/Cards";
import FilterList from "./LeftSection/LeftSection";

const Faraz = () => {
  return (
    <div className="container my-4">
      {/* Top Section */}
      <div className="row">
        <div className="col-lg-3">
          {/* Filters Section */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95197.51220285961!2d68.68132557634884!3d27.5377119244416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935da5e71caa8b9%3A0x3a9ffdf3598dfbfd!2sKhairpur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738157055117!5m2!1sen!2s&zoomControl=0&scrollwheel=0&disableDefaultUI=true"
        width="100%" // Making the iframe responsive
        height="250"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>


          {/* <div className="border  rounded mb-4">
            <h5 className="text-start ps-2">Filter by:</h5>
<hr />
          

            <div className="mt-3">


            <div className="p-3">
            <h6 className="text-start">Popular filters</h6>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                5 stars
                </label> </Box>
                <span>17</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Hotels
                </label> </Box>
                <span>223</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Apartments
                </label> </Box>
                <span>367</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Villas
                </label> </Box>
                <span>14</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Private pool
                </label> </Box>
                <span>48</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Holiday homes
                </label> </Box>
                <span>27</span>
              </div>
              
              
            </div>
              <p>Based on guest reviews</p>
              <hr />
<div className=" text-start ps-3" style={{width:"100%"}}>Property type</div>
<div className="p-3">

<div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Apartments
                </label> </Box>
                <span>367</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Hotels
                </label> </Box>
                <span>223</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Guest houses
                </label> </Box>
                <span>45</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Holiday homes
                </label> </Box>
                <span>27</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Holiday homes
                </label> </Box>
                <span>27</span>
              </div>
              <span>show all 16 <KeyboardArrowDownIcon/></span>
</div>
<hr/>
<div className=" text-start ps-3" style={{width:"100%"}}>Property type</div>
<div className="p-3">

<div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Apartments
                </label> </Box>
                <span>367</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Hotels
                </label> </Box>
                <span>223</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Guest houses
                </label> </Box>
                <span>45</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Holiday homes
                </label> </Box>
                <span>27</span>
              </div>
              <div className="text-start d-flex align-items-center justify-content-between">
             <Box>    <input  type="checkbox"  />
                <label className="mx-1">
                Holiday homes
                </label> </Box>
                <span>27</span>
              </div>
              <span>show all 16 <KeyboardArrowDownIcon/></span>
</div>


            </div>
          </div> */}

        <FilterList/>
        </div>

        {/* Listings Section */}
        <div className="col-lg-9">
          <div >
          <Box className="d-flex flex-column text-start my-2">
            
          <Box className="d-flex align-items-center justify-content-between">     <h5>Islamabad: 1,135 properties found</h5>   
          {/* <Box style={{ padding: 0, margin: 0,height:10,width:54,border: "2px solid red" }}>
 <Button  style={{ margin: 0, padding: 0,fontSize:"8px", height:10 }}>list</Button>
 <Button style={{ margin: 0, padding: 0 }}>Grid</Button>
</Box> */}
<Box className="border rounded-5 p-2 bg-light" style={{ padding: 0, margin: 0, display: 'flex', gap: 0 }}>
  <Button className="text-black rounded-5 " style={{ margin: 0, padding: 0, fontSize: '12px', height: 'auto', border: 'none' }}>
    list
  </Button>
  <Button className="text-black rounded-5" style={{ margin: 0, padding: 0, fontSize: '12px', height: 'auto', border: 'none' }}>
    grid
  </Button>
</Box>




            
             </Box>
            <select className="form-select w-25">
              <option>Sort by: Our top picks</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select> </Box>
          
          </div>

          {/* Hotel Card 1 */}
          {/* <Card className="mb-4 border py-3">
            <div className="row g-0">
              <div className="col-md-4 position-relative">
                <img
                  src={one}
                  className="img-fluid rounded"
                  alt="Elysium Royale Apartments"
                />
                <FavoriteBorderIcon  className="fs-3 text-secondary position-absolute top-0 end-0 me-4 mt-1 p-1 bg-white rounded-5"/>
              </div>
              <div className="col-md-6 ">
                <CardContent>
                  <div className="d-flex justify-content-between align-items-start">
                  <Box className="d-flex align-items-center">
  <h5 className="text-primary fw-bold" style={{ margin: 0 }}>
    Gulberg Inn Hotel Lahore
    <StarIcon className="text-warning fs-6" />
    <StarIcon className="text-warning fs-6" />
    <StarIcon className="text-warning fs-6" />
    <Typography className="bg-warning rounded-1 p-1 " component="span" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <ThumbUpAltIcon style={{fontSize:"14px"}} className=" text-white " />
      <AddIcon style={{fontSize:"14px"}} className=" text-white fw-bolder" />
    </Typography>
  </h5>
</Box>

                 
                  </div>
                  
                 <Box className="d-flex">  <p  style={{ textDecoration: 'underline',fontSize:"14px" }} className="text-primary">Gulberg, Lahore </p>
                 <p className="text-primary" style={{ textDecoration: 'underline',fontSize:"14px" }}>
  Show on map
</p>

                  <p style={{fontSize:"14px"}}>7.4 km from centre </p>
                  </Box>
                 <Typography className="text-start" style={{fontSize:"14px"}}> Set in Lahore, 29 km from Wagah Border, Gulberg Inn Hotel Lahore  offers accommodation with a garden, free private parking, a shared  lounge and a terrace. </Typography>
                
                
                 
                 
                </CardContent>
              </div>
              <div className="col-md-2  pt-3"> 
               <Box className="d-flex align-items-center ps-4"> 
               <Box className="d-flex flex-column">
                   
                   <Typography className="fw-bold" style={{fontSize:"16px"}}> Good
                  </Typography> 
                   <Typography className="text-secondary" style={{fontSize:"12px"}}> 27 reviews
                  </Typography> 
                  </Box>
                  <Box><Typography style={{fontSize:"14px",backgroundColor:"#003b95"}}  className="text-white fw-bold rounded-1 ms-1 py-1 px-1 ">7.9</Typography> </Box>


               </Box>
               <Button
  className="bg-warning text-black"
  style={{ fontSize: "10px", padding: "3px", margin: "0" }}
>
  New to Booking.com
</Button>
<Button   style={{ fontSize: "12px", padding: "6px", margin: "0",marginTop:"12px" }} className="fw-bold bg-primary text-white">Show prices</Button>

                 </div>
            </div>
          </Card> */}
          <CardList/>

          {/* Hotel Card 2 */}
          {/* <Card className="mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={two}
                  className="img-fluid rounded-start"
                  alt="Marriott Hotel"
                />
              </div>
              <div className="col-md-8">
                <CardContent>
                  <div className="d-flex justify-content-between align-items-start">
                    <h5>Islamabad Marriott Hotel</h5>
                    <Badge color="primary" badgeContent="Very good 8.1" />
                  </div>
                  <p className="text-muted">Islamabad - 0.7 km from centre</p>
                  <p>
                    Deluxe Guest Room • 1 King • Free cancellation • No prepayment needed
                  </p>
                  <p>
                    <strong>PKR 40,000</strong> <span className="text-muted">+ PKR 8,300 taxes and charges</span>
                  </p>
                  <Button variant="contained">See availability</Button>
                </CardContent>
              </div>
            </div>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Faraz;
