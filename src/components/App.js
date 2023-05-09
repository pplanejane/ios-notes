import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";

function App() {
  return (
    <>
    <SearchBox/>
    <div class="main">
      <Sidebar/>
      <Workspace/>
    </div>
    </>
  );
}

export default App;
