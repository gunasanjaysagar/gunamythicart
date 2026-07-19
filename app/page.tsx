import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <main>
      <Container className="py-32">
        <h1 className="text-5xl font-bold">
          GunaMythicArt
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-400">
          Premium Lord Shiva inspired digital artwork crafted for collectors,
          devotees, and Curators of timeless design.
        </p>
      </Container>
    </main>
  );
}