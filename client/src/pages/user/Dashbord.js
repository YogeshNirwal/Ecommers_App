import React from "react";
import OuterLayout from "../../components/layouts/OuterLayout";
import UserMenu from "../../components/layouts/UserMenu";
import { useAuth } from "../../context/auth";

const Dashbord = () => {
  const [auth] = useAuth();
  return (
    <OuterLayout title={"user-Dashbord"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p3">
              <h3>Admin Name:{auth?.user?.name}</h3>
              <h3>Admin Email:{auth?.user?.email}</h3>
              <h3>Admin Contact:{auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </OuterLayout>
  );
};

export default Dashbord;
