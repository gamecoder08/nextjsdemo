import Link from "next/link";
import ProductCard from "./components/ProductCard";
import ThemeCard from "./components/ThemeCard";

export default function Home() {
  return (
    <main className="relative min-h-screen p-4">
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <div className="absolute top-4 right-4">
        <ThemeCard />
      </div>
    </main>
  );
}
