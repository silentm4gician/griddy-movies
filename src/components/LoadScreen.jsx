const LoadScreen = () => {
  return (
    <div className="fixed inset-0 bg-primary/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <span className="loader"></span>
        <p className="mt-4 text-lg text-cyan-400">Loading amazing content...</p>
      </div>
    </div>
  );
};

export default LoadScreen;