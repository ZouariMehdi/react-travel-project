import Header from "./components/Header";
import data from "./data";
import Card from "./components/Card";
export default function App() {
  const cards = data.map(function (card) {
    return (
      <Card
        img={card.imageUrl}
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
      />
    );
  });
  return (
    <div>
      <Header />
      <div>{cards}</div>
    </div>
  );
}
