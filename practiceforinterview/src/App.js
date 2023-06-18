

import Data from "./Component/Data";
import HomeSvg from "./Component/HomeSvg";
import Post from "./Component/Post";



function App() {
  return (
      <div className="App">

      {/* <Data /> */}
      <Post />
      <HomeSvg dir= "up"/>
      <HomeSvg dir="down" />
      </div>
  );
}

export default App
