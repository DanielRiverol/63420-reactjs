const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <>
          <span>Loading...</span>
        </>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
