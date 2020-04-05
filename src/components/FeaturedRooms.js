import React from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    const { greeting, name } = this.context;

    return (
      <div>
        {greeting} from FeaturedRooms {name}
      </div>
    );
  }
}

export default FeaturedRooms;
