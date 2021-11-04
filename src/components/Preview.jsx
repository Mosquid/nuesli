import { useMemo, useRef, useState } from "react";
import { extractTokenPayload, getSoundByIndex } from "../utils";
import { Alert, Input, Row, Col, Space } from "antd";
import { useParams } from "react-router";
import { PlaySquareOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/lib/layout/layout";

const Preview = () => {
  const soundRef = useRef();
  const { token } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, sound] = useMemo(() => {
    const payload = extractTokenPayload(token);

    if (payload) {
      const output = new SpeechSynthesisUtterance(payload.text);
      output.lang = "ru-RU";

      const sound = getSoundByIndex(payload.sound);

      return [output, sound.file];
    }
    return [];
  }, [token]);

  const speak = () => {
    setIsPlaying(true);
    speechSynthesis.speak(utterance);

    utterance.onend = () => {
      soundRef.current.play();
      soundRef.current.onended = () => {
        setIsPlaying(false);
      }
    };
  };

  const link = useMemo(() => {
    return window.location.href;
  }, []);

  return (
    <>
      <Header>
        <a href="/">Back home</a>
      </Header>
      <Content>
        <Row justify="center">
          <Col span={6}>
            <Space
              style={{ paddingTop: 100, width: "100%" }}
              direction="vertical"
              size="large"
            >
              <Alert type="success" showIcon={true} message={`Copy link: `} />
              <Input readOnly={true} value={link} />
              <div onClick={!isPlaying ? speak : ()=>{}}>
                <h2>Play</h2>
                <PlaySquareOutlined style={{ fontSize: 100 }} />
              </div>
              <audio ref={soundRef} src={sound} />
            </Space>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Preview;
