import Header from "./_components/header";
import InsertProducerPage from "./_components/insert_producer";

// import { fakeUser, fakeProfileComplete } from '../types/fake-data.ts'; //or your custom output path

// console.log(fakeUser());
// console.log(fakeProfileComplete());

export default function Home() {
  return (
    <div>

      <Header />

      <InsertProducerPage />

    </div>
  );
}
