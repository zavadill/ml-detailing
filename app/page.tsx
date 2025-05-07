import { Metadata } from 'next';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Recenze from '@/components/Recenze';
import About from '@/components/About';
import Resend from '@/components/Resend';

export const metadata: Metadata = {
  title: 'Detailing Matyáš Lexmaul',
  description:
    'Profesionální detailing vozidel v Drahanovicích – Matyáš Lexmaul nabízí špičkové čištění, leštění a ochranu laku v Olomouckém kraji. Objednejte se ještě dnes!',
  keywords: [
    'detailing Drahanovice',
    'čištění aut Olomouc',
    'leštění aut',
    'Matyáš Lexmaul',
    'ochrana laku',
    'detailing Olomoucký kraj',
  ],
  authors: [{ name: 'Adam Zavadil' }],
  openGraph: {
    title: 'Detailing Matyáš Lexmaul',
    description:
      'Profesionální detailing a péče o auto v Drahanovicích. Kvalita, na kterou se můžete spolehnout.',
    url: 'https://www.vase-domena.cz/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Recenze />
      <Resend />
    </div>
  );
}
