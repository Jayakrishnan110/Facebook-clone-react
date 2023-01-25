import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="StoryReel">
      <Story
        image="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?cs=srgb&dl=pexels-pixabay-235986.jpg&fm=jpg"
        profileSrc="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        title="Maxpain"
      />
      <Story
        image="https://images.pexels.com/photos/2909934/pexels-photo-2909934.jpeg?cs=srgb&dl=pexels-hisham-yahya-2909934.jpg&fm=jpg"
        profileSrc="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
        title="Jean"
      />
      <Story
        image="https://images.pexels.com/photos/13288033/pexels-photo-13288033.jpeg?cs=srgb&dl=pexels-l%C3%BCbna-abdullah-13288033.jpg&fm=jpg"
        profileSrc="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        title="Lord"
      />
      <Story
        image="https://images.pexels.com/photos/5699354/pexels-photo-5699354.jpeg?cs=srgb&dl=pexels-volkan-vardar-5699354.jpg&fm=jpg"
        profileSrc="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        title="Marv"
      />
      <Story
        image="https://images.pexels.com/photos/9307946/pexels-photo-9307946.jpeg?cs=srgb&dl=pexels-lokman-sevim-9307946.jpg&fm=jpg"
        profileSrc="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
        title="Parriot"
      />
    </div>
  );
}

export default StoryReel;
