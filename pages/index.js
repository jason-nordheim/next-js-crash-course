

import Layout from "../components/layout";
import Prices from "../components/prices";


const Home = ({ bpi }) => {
  console.log(bpi.USD);
  return (
    <Layout>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={bpi} /> 
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  console.log("data", data);

  return {
    props: { bpi: data.bpi },
  };
};

export default Home;
