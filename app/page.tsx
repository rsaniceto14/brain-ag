import Header from "./_components/header";
import LoginPage from "./_components/loginForm";

// import { fakeUser, fakeProfileComplete } from '../types/fake-data.ts'; //or your custom output path

// console.log(fakeUser());
// console.log(fakeProfileComplete());

export default function Home() {
  return (
    <div>

      <Header />

      <LoginPage />

    </div>
  );
}
