import styled from 'styled-components';
import { P } from '../../style/typography';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { motion } from 'framer-motion';

export const ArchModalWrapper = styled(motion.div)`
  --arch-width: 350px;
  --arch-height: 450px;
  --off-set: 25px;
  --border-width: 2px;

  position: fixed;
  top: 20%;
  left: 70%;
  z-index: 150;

  @media ${max.desktop} {
    left: 50%;
  }

  @media ${max.tabletLg} {
    top: 25%;
    left: calc(50% - (var(--arch-width) / 4));
  }

  @media ${max.tablet} {
    top: 30%;
    left: calc(50% - (var(--arch-width) / 2));
  }

  @media ${max.tabletSm} {
    --arch-width: 70vw;
    --arch-height: 100vw;
  }
`;

export const ArchModalContentWrapper = styled.div`
  width: calc(var(--arch-width) + var(--off-set));
  height: calc(var(--arch-height) + var(--off-set));
  position absolute;
`;

export const ArchFilledIn = styled.span`
  background-color: ${colors.GOLDENWHEAT};
  width: var(--arch-width);
  height: 50%;
  border: var(--border-width) solid ${colors.NIGHTSKY};
  border-top 0px;

  position: absolute;
  right: 0;
  bottom: 0;

  &:before {
    position: absolute;
    left: calc(-1 * var(--border-width));
    top: calc(-1 * (var(--arch-height) / 2) - var(--border-width));
    height: 100%;
    width: 100%;
    border-top-left-radius: calc(var(--arch-height) / 2);
    border-top-right-radius: calc(var(--arch-height) / 2);
    border: var(--border-width) solid ${colors.NIGHTSKY};
    border-bottom: 0px;
    background-color: inherit;
    content: '';
  }
`;

export const ArchOutline = styled(ArchFilledIn)`
  background-color: transparent;
  position: absolute;
  left: 0;
  bottom: 25px;
`;

export const ArchModalSpark = styled.img`
  --spark-width: min(25%, 100px);
  position: absolute;
  left: 150px;
  top: 80px;
  width: var(--spark-width);
  z-index: 1;

  @media ${max.tabletSm} {
    top: 20vw;
    left: calc(
      (var(--arch-width) / 2) - (var(--spark-width) / 2) + var(--off-set)
    );
  }
`;

export const ArchModalText = styled(P)`
  position: absolute;
  left: calc(var(--off-set) * 2);
  right: calc(var(--off-set) * 2);
  bottom: 28px;
  top: 200px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media ${max.tabletSm} {
    top: 45vw;
  }
`;

export const ArchModalCloseButton = styled(motion.button)`
  display flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: ${colors.GOLDENWHEAT};
  border: 2px solid ${colors.NIGHTSKY};
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media ${max.tabletSm} {
    top: -10px;
    width: 50px;
    height: 50px;
  }
`;

export const CloseXImage = styled.img`
  width: 70%;
`;
