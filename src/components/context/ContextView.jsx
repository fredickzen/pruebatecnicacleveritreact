import React, { useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import FormLayout from "../layouts/FormLayout";
import ContextSearch from "./ContextSearch";
import { UserOutlined } from "@ant-design/icons";
import ContextSearchResult from "./ContextSearchResult";
import ContextSearchResultDetail from "./ContextSearchResultDetail";
import "./contextview.scss";
import ContextAdd from "./ContextAdd";
import { UsersContext } from "./hooks/context/UsersContext";

const { Title } = Typography;

const ContextView = () => {
  const [isAddVisible, setIsAddVisible] = useState(false);

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);

  const [searchWord, setSearchWord] = useState("");

  return (
    <FormLayout>
      <Title level={3}>Clever Test</Title>
      <UsersContext.Provider
        value={{
          setIsAddVisible,
          users,
          setUsers,
          selectedUser,
          setSelectedUser,
          searchWord,
          setSearchWord,
        }}
      >
        <Row gutter={[20, 40]}>
          <Col lg={12} xs={24}>
            <ContextSearch />
          </Col>
          <Col
            lg={12}
            xs={24}
            style={{
              textAlign: "right",
            }}
          >
            <Button
              type="primary"
              size="large"
              icon={<UserOutlined />}
              onClick={() => setIsAddVisible(true)}
            >
              Add User
            </Button>
          </Col>
        </Row>
        <Row gutter={[20, 40]}>
          <Col lg={12} xs={24}>
            <ContextSearchResult />
          </Col>
          <Col lg={12} xs={24}>
            <ContextSearchResultDetail />
          </Col>
        </Row>
        <ContextAdd isAddVisible={isAddVisible} />
      </UsersContext.Provider>
    </FormLayout>
  );
};

export default ContextView;
