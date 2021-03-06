import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';
import { motion } from 'framer-motion';

const TextLabel = styled(P)`
  color: ${colors.STONEPATH};
  display: block;
  margin: 0;
  font-size: 0.8em;
`;

const ErrorText = styled(P)`
  position: absolute;
  color: ${colors.RED};
  font-size: 0.7em;
  margin: 0.5em 0 0 0;
  text-shadow: 0.5px 0 #ff0000;
  letter-spacing: 0.13em;
`;

const StarLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextInput = styled(P).attrs({
  as: 'input',
})`
  display: block;
  border: none;
  background-color: ${colors.CANVAS};
  border-bottom: ${(props) =>
    props.showError
      ? `1px solid ${colors.RED}`
      : `1px solid ${colors.STONEPATH}`};
  width: 100%;
  border-radius: 0%;
  &:focus {
    outline: none;
  }
`;

const InputFieldWrapper = styled(motion.div)`
  padding-bottom: 2em;
`;

const AddIcon = styled(motion.img)`
  cursor: pointer;
  margin: -2em 0 0 0;
  width: 1.8em;
  float: right;
`;

const DeleteIcon = styled(motion.img)`
  cursor: pointer;
  margin: -2.3em -0.32em 0 0;
  width: 2.5em;
  float: right;
`;

export {
  TextLabel,
  TextInput,
  StarLabelContainer,
  ErrorText,
  InputFieldWrapper,
  AddIcon,
  DeleteIcon,
};
