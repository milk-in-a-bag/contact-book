import Contact from "./Contact";

export default function App() {
  return (
    <div className="contacts">
      <Contact
        img="src/assets/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="src/assets/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        mail="fluff@me.com"
      />
      <Contact
        img="src/assets/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com"
      />
      <Contact
        img="src/assets/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        mail="pumpkin@scrimba.com"
      />
    </div>
  );
}
