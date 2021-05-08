import React from 'react';
import { Typography, Paper, Container, Box } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  padding: 15px;
  background-color: #e5e5e5;
  border-radius: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 5px;
    border-radius: 10px;
  }
`;

const Image = styled.img`
  border-radius: 10px;
  width: 285px;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const Description = styled(Container)`
  padding-top: 10px;
  text-align: left;
  font-family: Poppins;
  margin-left: 0;
`;

const Heading = styled(Typography)`
  font-weight: 600;
`;
const Subheading = styled(Typography)`
  font-weight: 500;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Paragraph = styled(Typography)`
  font-weight: 300;
  text-align: justify;
  color: #555454;
`;

const Name = styled.span`
  margin-right: 40px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const EditorDeskCard = ({ classes, image, title, subtitle }) => {
  return (
    <Wrapper elevation={3} component='div'>
      <div style={{ objectFit: 'fill' }} className={classes.actionArea}>
        <Image className={classes.media} src={image} />
      </div>

      <Description variant='div' maxWidth='md'>
        <Heading variant='h4'>HEY BRO: WHAT'S UP?</Heading>
        <Subheading variant='h6'>
          <Name>PIRTHU PRASAD</Name> <Name>MAHESH PATI</Name>
        </Subheading>
        <Paragraph variant='subtitle1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </Description>
    </Wrapper>
  );
};

export default EditorDeskCard;
