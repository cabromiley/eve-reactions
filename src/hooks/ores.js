import { useState } from 'react';

export function useActiveOres() {
  const [activeOres, setActiveOres] = useState([]);
  const toggleOre = (name) => {
    if (activeOres.includes(name)) {
      setActiveOres([ ...activeOres.filter(ore => ore !== name) ])
      return;
    }

    setActiveOres([ ...activeOres, name ])
  }

  return [activeOres, toggleOre]
}
