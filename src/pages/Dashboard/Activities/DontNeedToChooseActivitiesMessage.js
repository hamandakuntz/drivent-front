import styled from "styled-components";

export default function DontNeedToChooseActivitiesMessage() {
  return (
    <Wrapper>
      <Message>
        <span>
        Sua modalidade de ingresso não necessita escolher
        atividade. Você terá acesso a todas as atividades.
        </span>
      </Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 34px;
    line-height: 40px;
    color: #000000;
  }
`;

const Message = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #8e8e8e;
    text-align: center;
  }
`;
