
import TestimonialCard from "./TestimonialCard";

// Example images — replace with real images
const testimonials = [
  {
    image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
    name: "Arjun Singh",
    role: "Education Consultant",
    quote:
      "Excelencia International transformed how I partner with top universities — the streamlined process and expert support are unmatched!",
  },
  {
    image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
    name: "Sara Kumar",
    role: "Agency Partner",
    quote:
      "Working with Excelencia simplified student admissions and visa guidance like never before. Truly a trusted B2B platform!",
  },
  {
    image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
    name: "Rohit Mehta",
    role: "Global Placement Advisor",
    quote:
      "Their support team is responsive, knowledgeable, and always ready to guide — highly recommended for study abroad agencies.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#c1972d]">What Our Partners Say</h2>
        <p className="mt-2 text-gray-600">
          Real feedback from trusted global recruitment partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}
