import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import ShowCard from "./components/ShowCard.jsx";
import shows from "./data/shows.js"; // <<— data theo schema mới

export default function App() {
  const list = shows.data;
  const [selectedId, setSelectedId] = useState(list[0].id);
  const selected = useMemo(() => list.find(s => s.id === selectedId), [selectedId, list]);

  return (
    <>
      <Navbar />

      <main className="container" style={{ paddingBottom: 48 }}>
        <div style={{ margin: "6px 0 12px", color: "#cbd5e1", fontWeight: 500 }}>
          Explore
        </div>
        <div className="h1" style={{ color: "#aab4c3", fontWeight: 500 }}>
          What are you gonna watch today ?
        </div>

        <Banner show={selected} />

        <h3 className="h2" style={{ marginTop: 28 }}>New Release</h3>

        <section className="grid" aria-label="New Release list">
          {list.slice(1, 7).map(item => (
            <ShowCard key={item.id} show={item} onSelect={(s) => setSelectedId(s.id)} />
          ))}
        </section>
      </main>
    </>
  );
}
