import { Advantages } from "@widgets/advantages";
import { Conditions } from "@widgets/conditions";
import { Constructor } from "@widgets/constructor";
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
      <Constructor />
      <Conditions />
      <Feedback />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
