import { useEffect, useRef, useState } from 'react';
import { ReactComponent as AccordionArrowIcon } from '../../assets/icons/accordion-arrow.svg';
import { Typography } from '../Typography';
import { bodyInnerStyles, bodyStyles, containerStyles, headerStyles, iconStyles } from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

export const Accordion = ({ id, title, children, defaultExpanded = false }: AccordionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(defaultExpanded);

  useEffect(() => {
    if (ref.current) {
      if (expanded) {
        ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
      } else {
        ref.current.style.maxHeight = '0';
      }
    }
  }, [expanded]);

  const switchExpand = () => setExpanded((prevState) => !prevState);

  return (
    <div css={containerStyles} id={id}>
      <div css={headerStyles} onClick={switchExpand}>
        <Typography.Title type={3}>{title}</Typography.Title>
        <AccordionArrowIcon css={iconStyles(expanded)} title="expand" />
      </div>
      <div css={bodyStyles(expanded)} ref={ref}>
        <div css={bodyInnerStyles}>{children}</div>
      </div>
    </div>
  );
};
