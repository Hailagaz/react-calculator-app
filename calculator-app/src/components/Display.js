import React from 'react';
import { styled } from '@mui/system';

const DisplayContainer = styled('div')`
  background-color: #fff;
  height: 60px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  padding: 0 10px;
	margin: 8px 0;
`;

const Display = ({ input }) => {
	return <DisplayContainer>{input}</DisplayContainer>;
};

export default Display;
