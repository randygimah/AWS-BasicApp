import Tabs, { TabPanel } from "../../components/GDS tabs";

//Tabs
import { Decision } from "./decision-tab/decision";
import { LZ } from "./landing-zone-tab/landing-zone";
import { MapTab } from "./map-tab/map";

export function AllTabs() {
  const tabs = [
    { id: "maps", label: "Map" },
    { id: "LZ", label: "Landing Zone Details" },
    { id: "Decision", label: "Decision Support" },
  ];

  return (
    <Tabs tabs={tabs} defaultTab="maps">
      <TabPanel id="maps">
        <MapTab />
      </TabPanel>
      <TabPanel id="LZ">
        <LZ />
      </TabPanel>
      <TabPanel id="Decision">
        <Decision />
      </TabPanel>
    </Tabs>
  );
}
export default AllTabs;
