import React from 'react';
import {GET_ERROR_MSG} from '../../Constants/Constant'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <section className="locationSection">
      <p> {GET_ERROR_MSG}</p>
    </section>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
