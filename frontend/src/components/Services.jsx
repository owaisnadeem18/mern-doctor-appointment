import { servicesData } from "@/lib/data/ServicesData";
import { ServiceCard } from "./ui/ServiceCard";

export const Services = () => {
  return (
    <section className="flex flex-col gap-12">
      
      {/* Top Header Section */}
      <div className="flex flex-col gap-4 justify-center items-center text-center max-w-[50%] mx-auto">
        <h2 className="text-h2 font-bold text-brand-teal ">
          Services we provide
        </h2>
        <p className="text-body font-regular text-brand-gray">
          Lorem ipsum dolor sit amet adenocarcinoma adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
        </p>  
      </div>

      {/* Fully Responsive Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

    </section>
  );
};

export default Services;