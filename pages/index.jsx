import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Difference from "@/components/Difference";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Difference />
        <br />
        <br />
        <Reviews />
        <section className="bg-brightRed paleRed">
          <div className="container grid md:grid-cols-2 items-center px-8 py-20 md:py-10">
            <h2 className="text-3xl xl:text-4xl text-red-50 p-8 pt-0 md:p-0 md:pr-8 text-center md:text-left">
              <strong>Simplify how your team works today.</strong>
            </h2>
            <div>
              <a href="#" className="btn block mx-auto py-2 w-2/3 max-w-40 bg-white brightRed hover:bg-red-100">Get Started</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}