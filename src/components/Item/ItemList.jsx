import Lens01 from "../../assets/img/lens01.jpg";
import Lens02 from "../../assets/img/lens02.jpg";
import Lens03 from "../../assets/img/lens03.jpg";
import Item from "../Item/Item";
import { useSearchFilter } from "../Hooks";

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
    }
]

const ItemList = () => {
  let items = itemsMock;
  const filter = useSearchFilter();
  console.log(filter);

  if(filter !== '' && filter != null)
    items = items.filter(val => val.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="list-wrapper">
      <section className="list">
        {items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </section>
    </div>
  );
};

export default ItemList;