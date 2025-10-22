const Smoke = () => {
  return (
    <div className="absolute  bottom-0 lg:inset-0 -z-[1]">
      <video preload="none" autoPlay loop muted className="w-full h-full">
        <source src="/smoke.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Smoke;
