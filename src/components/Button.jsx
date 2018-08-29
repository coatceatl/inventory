import React, { Component } from 'react';
import {
    Button
} from 'reactstrap';

class Btn extends Component {
  render() {
    return (
      <div>
              <Button
                tag="a"
                color="success"
                size="large"
                href="#"
                target="_blank"
              >
                Добавить предмет
              </Button>
             </div>
        );
    }
}

export default Btn;

