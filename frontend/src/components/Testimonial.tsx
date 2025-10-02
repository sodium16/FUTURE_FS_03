// src/components/Testimonial.tsx

// Define the shape of the props we expect
interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial = ({ quote, author }: TestimonialProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-gray-50 p-10 rounded-xl shadow-lg border">
          {/* Display the props instead of hardcoded text */}
          <p className="text-2xl italic text-brand-dark leading-relaxed">
            {quote}
          </p>
          <p className="mt-6 font-bold text-gray-700">- {author}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;