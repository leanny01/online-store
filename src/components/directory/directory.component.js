import React from "react";
import data from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: data,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
