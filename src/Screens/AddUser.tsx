import React, { useState } from "react";
import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Checkbox,
  Button,
  Row,
  Col,
} from "antd";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addUserAction } from "../Store/Action";
import { useNavigate } from "react-router";

const { Option } = Select;

interface FormValues {
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  department: string;
  doj: string;
  isPermanent: boolean;
}

const departments = ["HR", "Sales", "Development", "Marketing"];

const AddUser = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "",
    department: "",
    doj: "",
    isPermanent: false,
  });
  const navigate = useNavigate();

  const onFinish = () => {
    dispatch(addUserAction(formValues));
    navigate("/view-user");
  };

  const mobileNumberValidator = (_: any, value: string) => {
    if (!value) return Promise.reject("Mobile is required");
    if (!/^\d{10}$/.test(value))
      return Promise.reject("Mobile must be 10 digits");
    return Promise.resolve();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={formValues}
      onFinish={onFinish}
      style={{ maxWidth: 700, margin: "auto", padding: 20 }}
    >
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Full Name is required" }]}
          >
            <Input
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, validator: mobileNumberValidator }]}
          >
            <Input
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  mobile: e.target.value,
                }))
              }
              maxLength={10}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "City is required" }]}
          >
            <Input
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  city: e.target.value,
                }))
              }
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select gender" }]}
          >
            <Radio.Group
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  gender: e.target.value,
                }))
              }
            >
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true, message: "Please select department" }]}
          >
            <Select
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  department: e,
                }))
              }
              placeholder="Select department"
            >
              {departments.map((dept) => (
                <Option key={dept} value={dept}>
                  {dept}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            label="Date of Joining"
            name="doj"
            rules={[
              { required: true, message: "Please select Date of Joining" },
            ]}
          >
            <DatePicker
              format="D-M-YYYY"
              value={formValues.doj}
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  doj: dayjs(e).format("D-M-YYYY"),
                }))
              }
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="isPermanent">
            <Checkbox>Permanent Employee</Checkbox>
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddUser;
