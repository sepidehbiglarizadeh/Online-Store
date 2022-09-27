import Layout from "../Layout/Layout";
import { useAuth } from "../Providers/AuthProvider";

const ProfilePage = () => {
    const userData= useAuth();
  return (
    <Layout>
      <div>
        <p>userName: {userData.name}</p>
        <p>email: {userData.email}</p>
        <p>phoneNumber: {userData.phoneNumber}</p>
      </div>
    </Layout>
  );
};

export default ProfilePage;
