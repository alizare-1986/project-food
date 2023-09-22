import MenuPage from "../../components/templates/MenuPage";

function Menu({ menu }) {
  return (
    <div>
      <MenuPage data={menu} />
    </div>
  );
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  return {
    props: { menu: data },
    revalidate: 1 * 60 * 60, //seconds //for update offsell
  };
}
