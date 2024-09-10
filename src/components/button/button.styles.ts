import { Button, styled } from "tamagui";
import { navy } from "../../const";


export const StyledButtonPrimary = styled(Button, {
  backgroundColor: navy,
  height : '30px',
  color : 'white'
});

export const StyledButtonSecondary = styled(Button, {
  backgroundColor: 'white',
  height : '30px',
  color : navy
});