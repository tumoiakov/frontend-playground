import { Advantages } from "@widgets/advantages";
import { Conditions } from "@widgets/conditions";
import { Constructors } from "@widgets/constructors";
import Contacts from "@widgets/contacts/Contacts";
import { Feedback } from "@widgets/feedback";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import { Presentation } from "@widgets/presentation";
import { Products } from "@widgets/products";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Advantages />
      <Products />
      <Constructors />
      <Conditions />
      <Feedback />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
