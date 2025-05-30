import { TitleAnime } from '@/components/titleAnime';
export default function Home() {
  return (
    <>
      <div className="container mx-auto border p-4">
        <h1 className="sr-only">Développeur web freelance - Alan Grolleau</h1>
        <TitleAnime message="Alan Grolleau - Développeur web" />
      </div>
    </>
  );
}
