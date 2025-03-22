import { Descriptions, Tag } from "antd";
import Title from "antd/es/typography/Title";
import { useSelector } from "react-redux";

const ViewUser = () => {
  const { userDetails } = useSelector((state: any) => state);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: 30 }}>
        User Details
      </Title>
      <Descriptions column={1} bordered size="middle">
        <Descriptions.Item label="Full Name">
          {userDetails.fullName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{userDetails.email}</Descriptions.Item>
        <Descriptions.Item label="Mobile">
          {userDetails.mobile}
        </Descriptions.Item>
        <Descriptions.Item label="City">{userDetails.city}</Descriptions.Item>
        <Descriptions.Item label="Gender">
          {userDetails.gender}
        </Descriptions.Item>
        <Descriptions.Item label="Department">
          {userDetails.department}
        </Descriptions.Item>
        <Descriptions.Item label="Date of Joining">
          {userDetails.doj}
        </Descriptions.Item>
        <Descriptions.Item label="Permanent Employee">
          {userDetails.isPermanent ? (
            <Tag color="green">Yes</Tag>
          ) : (
            <Tag color="red">No</Tag>
          )}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ViewUser;
