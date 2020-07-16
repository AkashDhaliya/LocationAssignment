import React from 'react';
import { GetErrorMSG} from '../../Constants/Constant'

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
      <p> {GetErrorMSG}</p>
    </section>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
