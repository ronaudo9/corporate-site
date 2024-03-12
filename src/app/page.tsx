import { Header } from "./components/Header";
import { Pickup } from "./components/Pickup";
import { Container } from "./components/Container";
export default function Home() {
  return (
    <>
      <Header />
      <Pickup />
      <Container />
      <footer className="mt-36 bg-green-100">aa</footer>
    </>
  );
}
