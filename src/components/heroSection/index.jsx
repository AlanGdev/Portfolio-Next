import { TitleAnime } from '../titleAnime';
import {
  TitleContenu,
  ParagContenu,
  ProjectButton,
} from '../heroSectionServerComponents';

export function HeroSection() {
  return (
    <>
      <section className="flex h-screen items-center justify-center px-4 text-center">
        <div>
          {' '}
          <TitleAnime>
            <TitleContenu />
          </TitleAnime>
          <ParagContenu />
          <ProjectButton />
        </div>
      </section>
    </>
  );
}
