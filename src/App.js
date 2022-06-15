import { MenuDB } from "./components/1_Re/Menu";
import { Review_1 } from "./components/1_Re/Review_1";

const App = () => {
  return (
    <>
      <Review_1 lunch={MenuDB} />
    </>
  );
};

export default App;
