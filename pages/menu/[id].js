import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";

function Details({data}) {
    const router=useRouter()
    if(router.isFallback){
        return<h1>Loading page ....</h1>
    }

  return <div>
    <DetailsPage {...data}/>
  </div>;
}

export default Details;
export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: {
      id: food.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${params.id}`);
  const data = await res.json();
 if(!data.id){
    return{
       redirect:{destination:"/menu"}
    };
 }
  return {
    props: { data },
    revalidate: +process.env.REVALIDATE
  };
}
