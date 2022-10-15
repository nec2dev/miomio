import Lens01 from "../../assets/img/lens01.jpg";
import Lens02 from "../../assets/img/lens02.jpg";
import Lens03 from "../../assets/img/lens03.jpg";
import Item from "../Item/Item";
import { useSearchFilter } from "../Hooks";
import "./ItemList.css";

const itemsMock = [
  {
    id: 1,
    image: Lens01,
    title: 'Anteojos 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
    sizes: ['S', 'M'],
    colors: ['Rojo', 'Violeta'],
    price: 1500
  },
  {
    id: 2,
    image: Lens02,
    title: 'Anteojos 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
    sizes: ['S', 'M'],
    colors: ['Rojo', 'Violeta'],
    price: 5500
  },
  {
    id: 3,
    image: Lens03,
    title: 'Anteojos 3',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
    sizes: ['S', 'M'],
    colors: ['Rojo', 'Violeta'],
    price: 1000
  },
  {
  id: 4,
    image: Lens01,
    title: 'Anteojos 4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
    sizes: ['S', 'M'],
    colors: ['Rojo', 'Violeta'],
    price: 1500
  },
  {
  id: 5,
    image: Lens02,
    title: 'Anteojos 5',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
    sizes: ['S', 'M'],
    colors: ['Rojo', 'Violeta'],
    price: 1500
  },
  {
  id: 6,
    image: Lens03,
    title: 'Anteojos 6',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
    sizes: ['S', 'M'],
    colors: ['Rojo', 'Violeta'],
    price: 1500
  }
]

const ItemList = () => {
  let items = itemsMock;
  const filter = useSearchFilter();
  console.log(filter);

  if (filter !== '' && filter != null)
    items = items.filter(val => val.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className=" py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            {items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
            </div>
    </section>
  );
};

export default ItemList;