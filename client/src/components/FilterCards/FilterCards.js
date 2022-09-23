import { useState } from "react";

export default function FilterCards() {
  const [filter, setFilter] = useState({
    priceRange: { min: null, max: null },
    ubication: null,
    reto: null,
    titulo: null,
    caractersiticas: null,
  });
  return <div></div>;
}
