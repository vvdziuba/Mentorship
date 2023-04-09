import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: "Oops, something went wrong...",
    hasError: false,
  };

  static getDerivedStateFromError(error: string) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  logErrorToServices = console.log;

  render() {
    if (this.state.hasError) {
      return <p>{this.state.errorMessage}</p>;
    }
    //@ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;
