import "./App.css";
import QuoteFetcher from "./QuoteFetcher";
import Counter from "./counter";
import QuoteFetcherLoader from "./QuoteFetcherLoader";


function App() {
  return (
    <>
      <h1>Counter</h1>
      <Counter />
      <hr />
      <QuoteFetcher />
      <hr />
      <QuoteFetcherLoader />
      <hr />

    </>
  );
}

export default App;
