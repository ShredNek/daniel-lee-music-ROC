import { Navbar } from "./Navbar";
import { Visualiser } from "./Visualiser";
import { Discography } from "./Discography";
import { TopBlackDivider } from "./TopBlackDivider";
import { Links } from "./Links";
import { BottomDivider } from "./BottomDivider";
import { EPK } from "./EPK";
import CopyrightFooter from "./CopyrightFooter";

export default function App() {
  return (
    <div className="h-full min-h-[320px">
      <Navbar />
      <Visualiser />
      <TopBlackDivider />
      <Links />
      <BottomDivider />
      <Discography />
      <EPK />
      <CopyrightFooter />
    </div>
  );
}
