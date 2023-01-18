import Sidebar from "../../components/sidebar/Sidebar";
import Styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={Styles.settings}>
      <div className={Styles.settingWrapper}>
        <div className={Styles.settingsTitle}>
          <span className={Styles.settingsUpdateTitle}>
            Update your account
          </span>
          <span className={Styles.settingsDeleteTitle}> Delete account</span>
        </div>
        <form className={Styles.settingsForm}>
          <label> Profile Picture</label>
          <div className={Styles.settingsPP}>
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <div className={Styles.icon}>
                {" "}
                <i className="settingsPPIcon far fa-user-circle"></i>
              </div>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="safak" />
          <label> Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className={Styles.settingsSubmit}>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
