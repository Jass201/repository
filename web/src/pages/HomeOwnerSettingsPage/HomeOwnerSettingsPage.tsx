import NavBar from "../../components/ui/NavBar/NavBar";
import SideNav from "../../components/ui/SideNav/SideNav";
import Footer from "../../components/ui/Footer/Footer";
import HomeOwnerSettings from "../../components/HomeOwnerSettings/HomeOwnerSettings";
import "./HomeOwnerSettingsPage.css";

function HomeOwnerSettingsPage() {
  return (
    <div>
      <NavBar />
      <div className="settings-upper">
        <h3>Account Settings</h3>
        <p>Verander hier je account instellingen</p>
      </div>
      <div id="main-con">
        <div id="sidebar-con">
          <SideNav />
        </div>
        <HomeOwnerSettings />
      </div>
      <Footer />
    </div>
  );
}

export default HomeOwnerSettingsPage;
