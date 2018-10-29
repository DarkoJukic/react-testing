import React, { Component } from "react";
// https://coursehunters.net/course/mastering-react-mosh-hamedani
// https://www.youtube.com/watch?v=Ke90Tje7VS0
//stao na 1:55:00

class Counter extends Component {
  // state = {
  //   count: this.props.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  // kada imamo konstruktor onda ovako mozemo
  // constructor(props) {
  //   super();
  //   this.state.count = props.value;
  //   // na ovaj nacin u metodi handleIncrement this postaje dostupan (nije undefined)
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No Tags</p>;
    else {
      return this.state.tags.map(tag => (
        <li onClick={() => this.handleTagClick(tag)} key={tag}>
          {tag}
        </li>
      ));
    }
  }

  // sending list item info
  handleTagClick(tag) {
    console.log(tag);
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
  }

  handleIncrement(e) {
    this.setState({ count: this.state.count + 1 });
  }
  // na ovaj nacin this isto nije undefined
  handleIncrement2 = () => {
    debugger;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {/* renderira children elemente */}
        {this.props.children}
        {/* <img src={this.state.imageUrl} /> */}
        <span style={this.styles} className={this.getCounterClass()}>
          {this.formatCount()}
        </span>
        {/* <button onClick={this.handleIncrement2} className="btn btn-secondary btn-sm">+</button>
        <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button> */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
          disabled={this.props.counter.value == 0 ? true : false}
        >
          -
        </button>

        {/* //the way that & operator works in JS. Left side true, right side returned. */}
        {/* {this.state.tags.length === 0 && "Message when 0"} */}
        {/* <ul>{this.renderTags()} </ul> */}
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getCounterClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
