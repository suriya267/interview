import { BrowserRouter, Route, Routes } from "react-router";
import React, { Suspense } from "react";
import { Spin } from "antd";
import ViewUser from "./Screens/ViewUser";

const AddUser = React.lazy(() => import("./Screens/AddUser"));
const Navigate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route
          path="/view-user"
          element={
            <Suspense
              fallback={
                <Spin tip="Loading" size="large">
                  <div
                    style={{
                      padding: 50,
                      backgroundColor: "rgba(0,0,0.05)",
                      borderRadius: 4,
                    }}
                  ></div>
                </Spin>
              }
            >
              <ViewUser />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
