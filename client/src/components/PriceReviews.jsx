import React from 'react';
import styled from 'styled-components';

const DivRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoldLarge = styled.p`
  font-weight: 500;
  margin: 4px;
  font-size: 20px;
`;

const BoldMedium = styled.p`
  font-weight: 500;
  margin: 4px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center
`;

const SecondaryText = styled.p`
  color: #707070;
  font-weight: 300;
`;

const SecondaryTextSmall = styled.p`
  font-size: 12px;
  color: #707070;
  margin: 4px;
`;

const PriceReviews = ({ room }) => (
  <DivRow>
    <FlexDiv>
      {room ? (
        <BoldLarge>
          $
          {room.base_nightly_price}
        </BoldLarge>
      ) : <h1>Loading...</h1>}
      { room ? (
        <SecondaryText>
          / night
        </SecondaryText>
      ) : <h1>Loading...</h1>}
    </FlexDiv>

    <FlexDiv>
      {room ? (
        <BoldMedium>
        <img src="https://keybox.s3-us-west-1.amazonaws.com/star.png"/>
          {room.ratings_sum}
          <SecondaryTextSmall>
            {`(${room.ratings_count})`}
          </SecondaryTextSmall>
        </BoldMedium>
      ) : <h1>Loading...</h1>}
    </FlexDiv>
  </DivRow>
);

export default PriceReviews;
