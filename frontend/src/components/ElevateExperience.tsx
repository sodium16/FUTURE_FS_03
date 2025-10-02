// src/components/ElevateExperience.tsx

// Define the shape of the props we expect
interface ElevateExperienceProps {
  title: string;
  description: string;
}

const ElevateExperience = ({ title, description }: ElevateExperienceProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center max-w-3xl">
        {/* Display the props instead of hardcoded text */}
        <h2 className="text-4xl font-bold text-brand-dark mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ElevateExperience;