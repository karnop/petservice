import Image from "next/image";
import HomePage from "@/custom_components/HomePage";
import ReviewsPage from "@/custom_components/ReviewsPage";
import ServicesPage from "@/custom_components/ServicesPage";
import AnimalShelterPage from "@/custom_components/AnimalShelterPage";
import AnimalsPage from "@/custom_components/AnimalsPage";
import ContactPage from "@/custom_components/ContactPage";

export default function Home() {
  return (
      <main>
        <HomePage/>
        <ReviewsPage/>
          <ServicesPage/>
          <AnimalShelterPage/>
          <AnimalsPage/>
          <ContactPage/>
      </main>
  );
}
