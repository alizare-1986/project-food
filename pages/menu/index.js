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
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  return {
    props: { menu: data },
    revalidate: +process.env.REVALIDATE
  };
}
