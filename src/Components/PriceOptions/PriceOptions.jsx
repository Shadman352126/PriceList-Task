import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Fitness Paradise",
      price: "$50",
      features: [
        "24/7 Access",
        "Cardio Equipment",
        "Strength Training",
        "Group Classes",
        "Personal Trainer",
        "Sauna",
        "Locker Rooms",
        "Nutrition Counseling",
        "Childcare",
        "Tanning Beds",
      ],
    },
    {
      id: 2,
      name: "Powerhouse Gym",
      price: "$60",
      features: [
        "24/7 Access",
        "Cardio Equipment",
        "Strength Training",
        "Indoor Pool",
        "Basketball Court",
        "Cycling Studio",
        "Spa",
        "Steam Room",
        "Juice Bar",
        "Massage Therapy",
      ],
    },
    {
      id: 3,
      name: "FitFlex Fitness Center",
      price: "$45",
      features: [
        "24/7 Access",
        "Cardio Equipment",
        "Strength Training",
        "Yoga Classes",
        "Nutrition Counseling",
        "Boxing Ring",
        "Outdoor Track",
        "Free Wi-Fi",
        "Cafe",
        "Stretching Area",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl font-bold text-center py-8">
        Best Gym With Best Price In The Town
      </h2>
      <div className="grid grid-cols-3">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
