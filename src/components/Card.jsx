import IconMusic from './IconMusic';
import {
  StyledCard,
  StyledCardImage,
  StyledCardHeading,
  StyledParagraph,
  StyledCostDiv,
  StyledPlanDiv,
  StyledPlanHeading,
  StyledPlanParagraph,
  StyledPlanLink,
  StyledCardButton,
  StyledCancelLink,
} from './styles/Card.style';
import StyledBackground from './styles/Background.styled';

const Card = () => {
  return (
    <StyledBackground>
      <StyledCard>
        <StyledCardImage />
        <StyledCardHeading>Order Summary</StyledCardHeading>
        <StyledParagraph>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </StyledParagraph>
        <StyledCostDiv>
          <IconMusic />
          <StyledPlanDiv>
            <StyledPlanHeading>Annual Plan</StyledPlanHeading>
            <StyledPlanParagraph>$59.99/year</StyledPlanParagraph>
          </StyledPlanDiv>
          <StyledPlanLink href='url'>Change</StyledPlanLink>
        </StyledCostDiv>
        <StyledCardButton>Proceed to Payment</StyledCardButton>
        <StyledCancelLink href='url'>Cancel Order</StyledCancelLink>
      </StyledCard>
    </StyledBackground>
  );
};

export default Card;
