import StarIcon from '@/assets/icons/star.svg';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "respons",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-hidden -rotate-3 -mx-1">
        <div className="animate-marquee flex gap-4 py-3 whitespace-nowrap">
          {words.map((word, index) => (
            <div key={index} className="inline-flex gap-4 items-center">
              <span className="text-gray-800 uppercase font-extrabold text-sm">{word}</span>
              <StarIcon className="size-6 text-gray-800 -rotate-12" />
            </div>
          ))}
          {/* Duplicate content for smooth looping */}
          {words.map((word, index) => (
            <div key={`duplicate-${index}`} className="inline-flex gap-4 items-center">
              <span className="text-gray-800 uppercase font-extrabold text-sm">{word}</span>
              <StarIcon className="size-6 text-gray-800 -rotate-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
