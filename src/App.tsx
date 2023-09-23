import "./App.css";
import DiaryForm from "./components/DiaryForm";
import DiaryList from "./components/DiaryList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex w-full flex-col gap-5 mx-auto items-center max-w-xl p-5">
      <Navbar />
      <main className="w-full flex flex-col gap-5">
        <DiaryForm />
        <DiaryList />
      </main>
    </div>
  );
}

export default App;
