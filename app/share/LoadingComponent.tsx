const LoadingComponent = () => {
    return (
      <div className="flex w-full h-full items-center justify-center gap-5">
      <span className="border p-4 rounded-full animate-spin">FG</span>
      <span className="animate-pulse">Loading ...</span>
    </div>
    );
  };
  
  export default LoadingComponent;