import Texto from "./src/components/texto";
import Lista from "./src/components/lista";
export default function Home() {
  return (
    // Div serve para organaziar um conteudo
    // Conhecido como container    
    <main>
      <Texto />
      <Lista />
    </main>

  );
}
