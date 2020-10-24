import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../../stort/action/list";
import "./index.css";
class List extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.props.dispatch(data);
  }
  state = {
    list: [],
    off: true,
  };
  componentDidUpdate() {
    this.state.off &&
      this.props.data &&
      this.setState({ list: this.props.data[0].children, off: false });
  }
  render() {
    return (
      <div className={"list-content"}>
        <div className={"left"}>
          {!this.props.data ? (
            <div>loading...</div>
          ) : (
            <ul>
              {this.props.data.map((item: any, index: number) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      this.setState({ list: item.children });
                    }}
                  >
                    {item.cat_name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className={"right"}>
          {this.state.list.length > 1 ? (
            this.state.list.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <div className={"list-font"}>{item.cat_name}</div>
                  <div className={"list-box-cat"}>
                    {item.children === undefined
                      ? []
                      : item.children.map((item: any) => {
                          return (
                            <div
                              className={"cat-list-box"}
                              key={item.cat_id}
                              onClick={() => {
                                console.log(item);

                                this.props.history.push(
                                  `/list/item/${item.cat_id}`
                                );
                              }}
                            >
                              <img src={item.cat_icon} alt="" />
                              <p>{item.cat_name}</p>
                            </div>
                          );
                        })}
                  </div>
                </div>
              );
            })
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    );
  }
}
const mapState = (state: any) => {
  return {
    data: state.list,
  };
};

export default connect(mapState)(List);
