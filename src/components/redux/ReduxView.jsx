import { UserAddOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormLayout from "../layouts/FormLayout";
import { SetIsAddVisible } from "./actions/actions";
import ReduxAdd from "./ReduxAdd";
import ReduxSearch from "./ReduxSearch";
import ReduxSearchResult from "./ReduxSearchResult";
import ReduxSearchResultDetail from "./ReduxSearchResultDetail";

const { Title } = Typography;

const ReduxView = () => {
  const { isAddVisible } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const setIsAddVisibleDispach = () => {
    dispatch(SetIsAddVisible(true));
  };
  
  return (
    <FormLayout>
      <Title level={3}>Clever Test</Title>

      <Row gutter={[20, 40]}>
        <Col lg={12} xs={24}>
          <ReduxSearch />
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
            danger
            size="large"
            icon={<UserAddOutlined />}
            onClick={setIsAddVisibleDispach}
          >
            Add User
          </Button>
        </Col>
      </Row>
      <Row gutter={[20, 40]}>
        <Col lg={12} xs={24}>
          <ReduxSearchResult />
        </Col>
        <Col lg={12} xs={24}>
          <ReduxSearchResultDetail />
        </Col>
      </Row>
      <ReduxAdd isAddVisible={isAddVisible} />
    </FormLayout>
  );
};

export default ReduxView;
