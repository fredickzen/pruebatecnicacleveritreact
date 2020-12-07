import { Card, Space } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { useSelector } from "react-redux";

const ReduxSearchResultDetail = () => {
  const { selectedUser } = useSelector((state) => state.users);

  const title = selectedUser ? "Users info" : "Select a user";

  return (
    <Card
      title={<Text type="secondary">{title}</Text>}
      size="small"
      className="card-user-names"
      loading={false}
    >
      {selectedUser && (
        <Space direction="vertical">
          <Text type="secondary">"email": "{selectedUser.email}"</Text>
          <Text type="secondary">"lastName": "{selectedUser.lastname}"</Text>
          <Text type="secondary">"name": "{selectedUser.name}"</Text>
          <Text type="secondary">"id": "{selectedUser.id}"</Text>
        </Space>
      )}
    </Card>
  );
};

export default ReduxSearchResultDetail;
