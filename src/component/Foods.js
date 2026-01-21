import React from "react";

function Foods() {
  return (
    <div className="container">
      <h1 className="title">Famous Foods of Hyderabad</h1>

      <div className="foodGrid">
        <div className="foodCard">
          <img
            src="https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg"
            alt="Hyderabadi Biryani"
            className="foodImage"
          />
          <p className="foodName">Hyderabadi Biryani</p>
        </div>

        <div className="foodCard">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSey4VcFCbN4Ah10gPFmiZDqLkluF1yCAeg&s"
            alt="Haleem"
            className="foodImage"
          />
          <p className="foodName">Haleem</p>
        </div>

        <div className="foodCard">
          <img
            src="https://static.toiimg.com/thumb/84340119.cms?imgsize=207643&width=800&height=800"
            alt="Irani Chai"
            className="foodImage"
          />
          <p className="foodName">Irani Chai</p>
        </div>

        <div className="foodCard">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLH0VeCHMhsBzgl9gCzeHhAr80DNY7DtV9NQ&s"
            alt="Double Ka Meetha"
            className="foodImage"
          />
          <p className="foodName">Double Ka Meetha</p>
        </div>

        <div className="foodCard">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThl76YJTyK1U4B3RFLC8Wv2f6zTH3jDWSRWQ&s"
            alt="Mirchi Ka Salan"
            className="foodImage"
          />
          <p className="foodName">Mirchi Ka Salan</p>
        </div>
      </div>
    </div>
  );
}

export default Foods;
