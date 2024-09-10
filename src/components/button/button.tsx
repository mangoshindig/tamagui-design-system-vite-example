import { StyledButtonPrimary,StyledButtonSecondary } from "./button.styles";
import { ButtonProps } from "./button.types";


export const Button = ({ children, type, ...props }: ButtonProps & {type : 'primary' | 'secondary' | 'destructive' | 'primary_icon' | 'secondary_icon' | 'destructive_icon'
}) => {

  switch(type)
  {
    case 'primary':
      return <StyledButtonPrimary {...props}>{children}</StyledButtonPrimary>
    default:
      return <StyledButtonSecondary {...props}>{children}</StyledButtonSecondary>
  }

  
}
