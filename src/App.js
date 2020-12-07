import React from "react";
import "./App.css";
import { Tabs, Layout } from "antd";
import { FileTextFilled } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import ContextView from "./components/context/ContextView";
import ReduxView from "./components/redux/ReduxView";
import ReduxProvider from "./components/redux/ReduxProvider";

const { TabPane } = Tabs;
const { Content } = Layout;

function App() {
  const TabTitle = ({ title }) => (
    <Text strong>
      <FileTextFilled />
      {title}
    </Text>
  );

  return (
    <Layout>
      <Content>
        <Tabs defaultActiveKey="1" destroyInactiveTabPane>
          <TabPane key="1" tab={<TabTitle title="Clevert test - Context/fetch" />}>
            <ContextView />
          </TabPane>
          <TabPane key="2" tab={<TabTitle title="Clevert test - Redux/axios" />}>
            <ReduxProvider>
              <ReduxView />
            </ReduxProvider>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
}

export default App;
