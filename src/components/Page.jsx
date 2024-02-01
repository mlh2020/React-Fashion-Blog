import Head from "./Head";
import Nav from "./Nav";
import Articles from "./Articles";
import Foot from "./Foot";

function Page() {
    return (
        <div>
            <Head />
            <Nav /> 
            <Articles />
            <Foot />

        </div>
    );
}

export default Page;