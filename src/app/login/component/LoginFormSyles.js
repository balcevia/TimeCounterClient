import styled from 'styled-components';
import Paper from "@material-ui/core/Paper";

export const ColumnForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  * {
    width: 100%;
  }
  width: 80%;
  height: 80%;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 350px;
  margin: 30px auto;
`;

export const InlineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  * {
    width: 40%;
  }
`;