import React, { useEffect, useState } from "react";
import OuterLayout from "../../components/layouts/OuterLayout";
import AdminMenu from "../../components/layouts/AdminMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const Users = () => {
  const [status, setStatus] = useState(["User", "Admin"]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getAllUser = async () => {
    try {
      const { data } = await axios.get(
        `${window.location.origin}/api/v1/auth/all-user`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getAllUser();
  }, [auth?.token]);

  const handleChange = async (userID, value) => {
    try {
      const { data } = await axios.put(
        `${window.location.origin}/api/v1/auth/user-roll/${userID}`,
        {
          role: value,
        }
      );
      getAllUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <OuterLayout title="Admin-AllUsers">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Users</h1>
          <div className="border shadow">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Role</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              {orders?.map((o, i) => {
                return (
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.role === 1 ? "Admin" : "_User "}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s === "Admin" ? 1 : 0}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.name}</td>
                      <td>{o?.email}</td>
                      <td>{o?.phone}</td>
                      <td>{o?.address}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </OuterLayout>
  );
};

export default Users;
