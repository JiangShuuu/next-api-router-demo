import Items from '../components/layouthook/Items';

const SSRItem = [
  {
    id: 0,
    name: 'name 01',
  },
  {
    id: 1,
    name: 'name 02',
  },
  {
    id: 2,
    name: 'name 03',
  },
];

export default function page() {
  return <div>{/* <Items item={SSRItem} /> */}</div>;
}
