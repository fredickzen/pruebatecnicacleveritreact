import { Button, Modal, Form, Input } from "antd";
import React, { useContext, useRef, useState } from "react";
import { ApiUsersAddUser } from "../../js/api/User";
import { antDesingValidateMessages } from "../../js/lang/es/AntDesingValidateMessages";
import { UsersContext } from "./hooks/context/UsersContext";

const { Item } = Form;

const ContextAdd = ({ isAddVisible }) => {
  const { setIsAddVisible, users, setUsers } = useContext(UsersContext);

  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const submitForm = (data) => {
    const { user } = data;
    setLoading(true);
    ApiUsersAddUser(user).then((result) => {
      setUsers([...users, result]);
      setIsAddVisible(false);
      setLoading(false);
      formRef.current.resetFields();
    });
  };

  const Footer = (
    <div className="modal--footer-add-user">
      <Button type="primary" htmlType="submit" loading={loading}>
        Save user
      </Button>
    </div>
  );

  return (
    <Modal
      title="Add user"
      visible={isAddVisible}
      footer={false}
      onCancel={() => setIsAddVisible(false)}
    >
      <Form
        name="addUser"
        layout="vertical"
        requiredMark={false}
        validateMessages={antDesingValidateMessages}
        ref={formRef}
        onFinish={submitForm}
      >
        <Item
          name={["user", "name"]}
          label="User name"
          rules={[
            {
              required: true,
              type: "string",
              min: 3,
              max: 25,
            },
          ]}
        >
          <Input maxLength={25} />
        </Item>
        <Item
          name={["user", "lastname"]}
          label="Last name"
          rules={[
            {
              required: true,
              type: "string",
              min: 3,
              max: 25,
            },
          ]}
        >
          <Input maxLength={25} />
        </Item>
        <Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input maxLength={100} />
        </Item>
        {Footer}
      </Form>
    </Modal>
  );
};

export default ContextAdd;
