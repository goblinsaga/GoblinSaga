import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import NFTManager1 from "../src/components/NFTPacks/adminpack1";
import NFTManager2 from "../src/components/NFTPacks/adminpack2";
import NFTManager3 from "../src/components/NFTPacks/adminpack3";

const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      <NFTManager1 />
      <SectionDivider/>
      <NFTManager2/>
      <SectionDivider/>
      <NFTManager3/>
    </Layout>
  );
};
export default Index;
