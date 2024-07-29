import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavBar />
      {navigation.state === "loading" ? "loading" : <Outlet />}

      <Footer />
    </div>
  );
};

export default Root;
