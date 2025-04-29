import Filter from "./components/Filter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Filter />
        <JobCard />
      </div>
    </>
  );
}

export default App;
