import React from 'react';
import styled from 'styled-components';

const Card = ({ name, desc, image }) => {
  return (
    <StyledWrapper>
      <div className="m2">
        <div className="logo">
          <img src={image} className="rounded-xl" alt={name} />
        </div>
        <div className="content">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .m2 {
    position: relative;
    width: 20vmin; /* Reduced size */
    height: 20vmin; /* Reduced size */
    background: linear-gradient(135deg, #1e1e24 10%, #050505 60%); /* Applying gradient directly here */
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    animation: gradient-shift 5s ease-in-out infinite;
    background-size: 200% 200%; /* Gradient shift */
    border-radius: 10px; /* Add rounded corners for a smoother look */
  }

  .m2 .logo {
    display: inline-block;
    vertical-align: baseline;
    user-select: none;
    font-size: 5vmin; /* Smaller font size */
    color: white;
    background-image: linear-gradient(to right, #626262, #fff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
    text-align: center;
  }

  .m2 .logo img {
    width: 6vmin; /* Adjust image size */
    height: 6vmin; /* Adjust image size */
    border-radius: 50%; /* Optional, to make image round */
    object-fit: cover;
  }

  .m2 .content {
    text-align: center;
    color: white;
  }

  .m2 .content h1 {
    font-size: 2vmin;
    margin-bottom: 0.5vmin;
  }

  .m2 .content p {
    font-size: 1.5vmin;
  }

  /* Apply glowing effect on the card */
  .m2::before,
  .m2::after {
    --size: 5px;
    content: "";
    position: absolute;
    top: calc(var(--size) / -2);
    left: calc(var(--size) / -2);
    width: calc(100% + var(--size));
    height: calc(100% + var(--size));
    background: radial-gradient(circle at 0 0, hsl(27deg 93% 60%), transparent),
      radial-gradient(circle at 100% 0, #00a6ff, transparent),
      radial-gradient(circle at 0 100%, #ff0056, transparent),
      radial-gradient(circle at 100% 100%, #6500ff, transparent);
  }

  .m2::after {
    --size: 2px;
    z-index: -1;
  }

  .m2::before {
    --size: 10px;
    z-index: -2;
    filter: blur(2vmin);
    animation: blur-animation 3s ease-in-out alternate infinite;
  }

  @keyframes blur-animation {
    to {
      filter: blur(3vmin);
      transform: scale(1.05);
    }
  }

  /* Gradient animation */
  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Card;
