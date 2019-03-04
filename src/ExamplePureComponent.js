import React, { PureComponent } from "react";

export class ExamplePureComponent extends PureComponent {

  render() {
    const { name } = this.props;

    return (
      <div>
        Hello, {name}
      </div>
    );
  }

}