import React, { Fragment } from "react";
const hoc = (List: any) => (props: any) => {
  return (
    <Fragment>
      <List {...props}></List>
    </Fragment>
  );
};
export default hoc;
