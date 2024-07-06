import React from 'react';
import GoogleTranslate from './google-translation';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Google Translate error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Translation service unavailable.</div>;
    }

    return this.props.children;
  }
}

const GoogleTranslateWithErrorBoundary = () => (
  <ErrorBoundary>
    <GoogleTranslate />
  </ErrorBoundary>
);

export default GoogleTranslateWithErrorBoundary;