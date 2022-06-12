import React from "react";
import styled from "styled-components";

const MainText = () => {
  return (
    <Body>
      <div>
        [새롭게 일렁이다]는 과거를 기억하고, 이를 현재에 적용하여 더 나은 미래를
        만드는데 일조하고자 합니다.
      </div>
      <div>
        과거(독립 보훈) - 우리의 선조들이 세상에 삶을 내던져 일었던 '일렁임'을
        기억합니다.
      </div>
      <div>
        과거(대학가요) - 당시, 대학 대중 문화의 기틀을 만든, 대학가요제를
        기억합니다.
      </div>
      <div>
        현재(독립 보훈) - 오늘 우리가 발 딛고 사는 이 나라, 이 자유는 대가 없는
        것이 아닙니다.
      </div>
      <div>
        현재(대학가요) - 사라진 '대중'을 되찾기 위해 멈춰버린 대학가요제의
        새로운 재계를 도모합니다.
      </div>
      <div>
        미래(독립 보훈) - 이 사실을 모두가 보내는 하루와 그 삶 속에서 자연스레
        느끼며 호흡할 수 있도록 할 것입니다.
      </div>
      <div>
        미래(대학가요) - 대학가요,재를 통해 새로운 대학 대중문화를 만들 것이며,
        이를 통해, 새로운 K-문화의 반열에 '대학 대중 문화'가 오를 것입니다.
      </div>
    </Body>
  );
};

export default MainText;
const Body = styled.div`
  width: 1180px;
  height: 300vh;
`;
