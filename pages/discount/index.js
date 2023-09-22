import DiscountPage from "../../components/templates/DiscountPage";

function Discount({data}) {
    return (
        <div>
            <DiscountPage data={data}/>
        </div>
    );
}

export default Discount;
export async function getServerSideProps(){
    const res= await fetch(`${process.env.BASE_URL}/data`)
    const data=await res.json()
    const discountData =data.filter((food)=>( food.discount )
         
    )
   
    return {
        props:{data:discountData}
    }
}