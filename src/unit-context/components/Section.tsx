import { LevelContext } from "../contexts/LevelContext";

interface SectionProps {
  children: React.ReactNode;
  level: number
}

export default function Section({ level, children }: SectionProps) {
  return (
    <section className="section">
      {/* Step 3: Provide the context  */}
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}