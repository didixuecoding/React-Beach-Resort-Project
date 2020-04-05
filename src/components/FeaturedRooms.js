import React from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms } = this.context;
    console.log(featuredRooms);

    return <div>Hello from FeaturedRooms</div>;
  }
}

export default FeaturedRooms;
