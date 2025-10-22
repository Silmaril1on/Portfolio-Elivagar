import CardContainer from "./CardContainer";
import CardsHeader from "./CardsHeader";
import Light from "./Light";

const Painting = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden mt-20 z-50 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-30% z-[2]"></div>
      <CardsHeader />
      <CardContainer />
      <Light />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-30%"></div>
    </section>
  );
};

export default Painting;
