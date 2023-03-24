import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  // useContext會去找最近的父層provider的值是多少
  const level = useContext(LevelContext) 
  
  return (
    <section className="section">
      {/*   */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}