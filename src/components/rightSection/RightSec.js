import React from "react";
import "./rightSection.css";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { RiLinkedinBoxLine} from "react-icons/ri";
import Card from "../card/Card";
import  users  from "../db/db";

const RightSec = () => {
    console.log(users)
  const user = {
    src: "J",
    title: "Josh Jacob",
    data: "Educator",
  };
  return (
    <div className="mainC">
      <div>
        <p>Share</p>
        <div className="icons">
          <i >
            <FiFacebook />
          </i>
          <i >
            <FiTwitter />
          </i>
          <i >
            <RiLinkedinBoxLine />
          </i>
        </div>
        <div className="tags">
          

          <div className="cards1">
          <p>Guests</p>
            {users.map((items) => 
              <Card item={items} />
            )}
          </div>
          <div>
            <Card item={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSec;
