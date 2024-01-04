import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
function Home () {
    return ( 
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
        </div>
     );
}

export default Home ;