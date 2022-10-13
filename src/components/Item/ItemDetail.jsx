import { useParams } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import ItemDetails from '../Item/ItemDetails'
import AddToCartButton from '../Buttons/ButtonAddToCart'
import BackButton from '../Buttons/ButtonBack'
import Lens01 from "../../assets/img/lens01.jpg";
import Lens02 from "../../assets/img/lens02.jpg";
import Lens03 from "../../assets/img/lens03.jpg";
//import itemsMock from '../mocks/items.json'

const itemsMock = [
  {
    id: 1,
    image: Lens01,
    title: "Anteojos 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.",
    sizes: ["S", "M"],
    colors: ["Rojo", "Violeta"],
    price: 1500,
  },
  {
    id: 2,
    image: Lens02,
    title: "Anteojos 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.",
    sizes: ["S", "M"],
    colors: ["Rojo", "Violeta"],
    price: 5500,
  },
  {
    id: 3,
    image: Lens03,
    title: "Anteojos 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.",
    sizes: ["S", "M"],
    colors: ["Rojo", "Violeta"],
    price: 1000,
  },
];

export default function DetailsPage() {
  const { id } = useParams();
  const item = itemsMock.find((item) => item.id === id);
  return (
    <div>
      <NavBar />
      <BackButton />
      <main className="bg-slate-800">
        <ItemDetails item={item} />
        <AddToCartButton />
      </main>
    </div>
  );
}