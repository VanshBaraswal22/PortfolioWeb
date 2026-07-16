import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {

  const courses = [
    {
      id: 1,
      title: "HTML",
      description: "Learn HTML Basics"
    },
    {
      id: 2,
      title: "CSS",
      description: "Learn CSS Basics"
    },
    {
      id: 3,
      title: "React",
      description: "Learn React Basics"
    }
  ];

  return (
    <>

      <Header />

      <main>

        <h2>React Components Practice</h2>

        <div className="card-container">

          {
            courses.map((course) => (

              <Card
                key={course.id}
                title={course.title}
                description={course.description}
              />

            ))
          }

        </div>

        <ContactForm />

      </main>

      <Footer />

    </>
  );

}

export default App;