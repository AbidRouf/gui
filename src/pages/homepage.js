import React from 'react';


const HomePage = () => {
  return (

      <>
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <div className="div-4">09:03</div>
              <div className="div-5">Thursday, 31 Aug</div>
            </div>
            <div className="div-6">London</div>
          </div>
          <div className="div-7">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0089b87068eb84f8cd295043a807e9c002a74641f5bd93a06ece9ca9906a1f78?apiKey=7c8edafe8ede425fa15e2a12a1db4375&"
              className="img"
            />
            <div className="div-8">Search for your preffered city...</div>
          </div>
          <div className="div-9">Plan Route</div>
        </div>
        <style jsx>{`
          .div {
            display: flex;
            width: 100%;
            gap: 20px;
            color: rgba(255, 255, 255, 0.6);
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .div {
              max-width: 100%;
              flex-wrap: wrap;
            }
          }
          .div-2 {
            border-radius: 30px;
            background-color: #364c86;
            display: flex;
            gap: 20px;
            color: #fee;
            padding: 13px 29px;
          }
          @media (max-width: 991px) {
            .div-2 {
              max-width: 100%;
              flex-wrap: wrap;
              padding: 0 20px;
            }
          }
          .div-3 {
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .div-4 {
            font: 700 24px Poppins, sans-serif;
          }
          .div-5 {
            margin-top: 15px;
            font: 400 20px Poppins, sans-serif;
          }
          .div-6 {
            flex-grow: 1;
            flex-basis: auto;
            margin: auto 0;
            font: 700 32px Poppins, sans-serif;
          }
          .div-7 {
            border-radius: 40px;
            box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
            background-color: #364c86;
            display: flex;
            gap: 20px;
            font-size: 18px;
            font-weight: 400;
            padding: 24px 49px;
          }
          @media (max-width: 991px) {
            .div-7 {
              flex-wrap: wrap;
              padding: 0 20px;
            }
          }
          .img {
            aspect-ratio: 0.77;
            object-fit: auto;
            object-position: center;
            width: 23px;
          }
          .div-8 {
            font-family: Poppins, sans-serif;
            flex-grow: 1;
            flex-basis: auto;
            margin: auto 0;
          }
          .div-9 {
            border-radius: 40px;
            box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
            background-color: #364c86;
            align-items: start;
            justify-content: center;
            padding: 33px 60px;
            font: 400 18px Poppins, sans-serif;
          }
          @media (max-width: 991px) {
            .div-9 {
              padding: 0 20px 0 22px;
            }
          }
        `}</style>
      </>
    );
  }
  
  


export default HomePage;
