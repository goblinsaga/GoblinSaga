import SectionDivider from "../src/components/SectionDivider";
import AdminTops from "../src/components/TopDashboard"
import AdminTopsTwo from "../src/components/TopDashboard2";
import Layout from "../src/layout/Layout";
import AdminTopOne from "../src/components/TopDashboardTop1";
import AdminTopTwo from "../src/components/TopDashboardTop2";
import AdminTopThree from "../src/components/TopDashboardTop3";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      <AdminTops/>
      <SectionDivider/>
      <AdminTopsTwo/>
      <SectionDivider/>
      <AdminTopOne/>
      <SectionDivider/>
      <AdminTopTwo/>
      <SectionDivider/>
      <AdminTopThree/>
    </Layout>
  );
};
export default Index;
