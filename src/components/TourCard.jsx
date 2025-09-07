import { FaMap } from "react-icons/fa";

function TourCard({ tour }) {
  return (
    <div className="shadow-2xl hover:shadow-3xl hover:scale-[1.03] transition-all duration-300 ease-linear">
      <div className="relative">
        <p className="text-neutral-700 text-sm font-normal bg-[#88ebf2] px-3 py-1 w-fit absolute right-0 bottom-0">
          {tour.date}
        </p>
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-[#f1f5f8] p-4 flex flex-col gap-3 h-[200px]">
        <h3 className="text-lg font-medium capitalize tracking-wider">
          {tour.title}
        </h3>
        <p className="text-sm text-neutral-500">{tour.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-sm text-primary-color font-medium">
            <FaMap className="inline mr-2" />
            {tour.destination}
          </p>
          <p className="text-sm text-primary-color font-medium">
            {tour.duration}
          </p>
          <p className="text-sm text-primary-color font-medium">{tour.price}</p>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
