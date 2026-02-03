
interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({ image, name, role, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center flex flex-col items-center space-y-4 max-w-sm mx-auto">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-4 border-[#c1972d]"
      />
      <h3 className="text-lg font-semibold text-[#1f2937]">{name}</h3>
      <p className="text-sm text-[#6b7280]">{role}</p>
      <p className="text-base text-[#374151] italic">"{quote}"</p>
    </div>
  );
}
