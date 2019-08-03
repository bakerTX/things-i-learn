import React from "react";

// components
import Card from "../../../components/Card";
import Title from "../../../components/Title";
import Tag from "../../../components/Tag";

class Lesson extends React.Component {
  state = {
    open: false
  };

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { thing } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Title onClick={() => this.handleClick()} text={thing.title} />
        {thing.tags && thing.tags.map(tag => <Tag text={tag} />)}
        <Card className={open ? "open" : ""}>{thing.content()}</Card>
      </div>
    );
  }
}

export default Lesson;
