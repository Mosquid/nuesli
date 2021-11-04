import React, { useEffect, useState } from "react";
import {
  Typography,
  Divider,
  Space,
  Row,
  Col,
  Input,
  Layout,
  Button,
} from "antd";
import Sounds from "./Sounds";
import { generateBase64Token } from "../utils";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const { Title } = Typography;
const { Header, Content } = Layout;

const Create = () => {
  const [text, setNewsText] = useState("");
  const [sound, setSound] = useState(undefined);
  const [token, setToken] = useState("");
  const handleNewsCreate = () => {
    const tkn = generateBase64Token({ sound, text });
    if (sound !== undefined && text !== "" && tkn) {
      setToken(tkn);
    } else {
      alert('Select the sound and type some text please');
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    token && navigate(`/preview/${token}`, { param: token });
  }, [token, navigate]);

  return (
    <div>
      <Header>
        <Space size="large" />
        <Title style={{ color: "white", marginBottom: 0, paddingTop: 5 }}>
          Create Your News Piece
        </Title>
      </Header>
      <Divider>Paste the text</Divider>
      <Content>
        <Row justify="center">
          <Col span={4}>
            <Space direction="vertical" size="large">
              <TextArea
                placeholder={
                  "What made you excited (only Cyrillic support at the moment)?"
                }
                onChange={(e) => setNewsText(e.target.value)}
                size="large"
                value={text}
              ></TextArea>
              <Divider>Pick a Sound</Divider>
              <Sounds onSelect={setSound} />
              <Button onClick={handleNewsCreate}>Create</Button>
            </Space>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default Create;
