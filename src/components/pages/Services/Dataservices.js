import ClassicCut from "../../assets/icons/Haircut Male/1.png";
import FadeHaircut from "../../assets/icons/Haircut Male/2.png";
import ShortCrop from "../../assets/icons/Haircut Male/3.png";
import SideSwept from "../../assets/icons/Haircut Male/4.png";
import LongLayers from "../../assets/icons/Haircut Male/5.png";
import BuzzCut from "../../assets/icons/Haircut Male/6.png";
import Pompadour from "../../assets/icons/Haircut Male/7.png";
import CrewCut from "../../assets/icons/Haircut Male/8.png";
import BobCut from "../../assets/icons/Haircut Male/9.png";
import BraidedCrown from "../../assets/icons/Haircut Male/10.png";
import Afro from "../../assets/icons/Haircut Male/11.png";
import SideSweptBangs from "../../assets/icons/Haircut Male/12.png";

const haircutStylesData = [
  {
    id: 1,
    name: "Classic Cut",
    description: "Timeless and versatile haircut.",
    date: null,
    time: null,
    price: 30,
    image: ClassicCut,
  },
  {
    id: 2,
    name: "Fade Haircut",
    description: "Clean and stylish fade haircut.",
    date: null,
    time: null,
    price: 65,
    image: FadeHaircut,
  },
  {
    id: 3,
    name: "Short Crop",
    description: "Short and low-maintenance crop style.",
    date: null,
    time: null,
    price: 45,
    image: ShortCrop,
  },
  {
    id: 4,
    name: "Long Layers",
    description: "Elegant and flowing long layers.",
    date: null,
    time: null,
    price: 80,
    image: LongLayers,
  },
  {
    id: 5,
    name: "Buzz Cut",
    description: "Short and easy-to-maintain buzz cut.",
    date: null,
    time: null,
    price: 40,
    image: BuzzCut,
  },
  {
    id: 6,
    name: "Pompadour",
    description: "Classic pompadour style for a retro look.",
    date: null,
    time: null,
    price: 60,
    image: Pompadour,
  },
  {
    id: 7,
    name: "Crew Cut",
    description: "Short and neat crew cut style.",
    date: null,
    time: null,
    price: 50,
    image: CrewCut,
  },
  {
    id: 8,
    name: "Bob Cut",
    description: "Chic and trendy bob haircut for women.",
    date: null,
    time: null,
    price: 45,
    image: BobCut,
  },
  {
    id: 9,
    name: "Braided Crown",
    description: "Chic and trendy bob haircut for women.",
    date: null,
    time: null,
    price: 35,
    image: BraidedCrown,
  },
  {
    id: 10,
    name: "Afro",
    description: "Chic and trendy bob haircut for women.",
    date: null,
    time: null,
    price: 30,
    image: Afro,
  },
  {
    id: 11,
    name: "Side Swept Bangs",
    description: "Chic and trendy bob haircut for women.",
    date: null,
    time: null,
    price: 70,
    image: SideSweptBangs,
  },
  {
    id: 12,
    name: "Side Swept",
    description: "Chic and trendy bob haircut for women.",
    date: null,
    time: null,
    price: 70,
    image: SideSwept,
  },
];

const setHaircutStylesData = (updatedData) => {
  // Implement your logic for setting the haircutStylesData here
};

const haircutData = {
  haircutStylesData,
  setHaircutStylesData,
};

export default haircutData;
