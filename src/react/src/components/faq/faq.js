import React, { useState } from "react";
import classNames from "classnames";
import "./faq.css";

function FAQ({
  children,
  defaultOpen = [0, 1],
  open: openFromProps,
  onToggle: onToggleFromProps = () => {}
}) {
  const isControlled = () => (openFromProps ? true : false);
  const [open, setIsOpen] = useState(defaultOpen);
  const getOpen = () => (isControlled() ? openFromProps : open);
  const isOpen = index => {
    return getOpen().includes(index) ? true : false;
  };
  const onToggle = index => {
    if (isControlled()) {
      onToggleFromProps(index);
    } else {
      if (getOpen().includes(index)) {
        setIsOpen(getOpen().filter(item => item !== index));
      } else {
        setIsOpen([...getOpen(), index]);
      }

      onToggleFromProps(index);
    }
  };
  return (
    <dl>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: isOpen(index),
          onToggle: () => onToggle(index)
        });
      })}
    </dl>
  );
}

function Question(props) {
  return (
    <dt>
      <button 
        className='faqQuestion'
        aria-expanded={props.isOpen}
        aria-controls={props.answerId}
        onClick={onToggle}
      >
        {children(isOpen, onToggle)}
      </button>
    </dt>
  );
}

function Answer(props) {
  const mergedClassname = className('faqAnswer', {
    'faqAnswer-hidden': !props.isOpen
  });
  return (
    <dd>
      <p className={mergedClassname} id={props.id}>
        {props.children}
      </p>
    </dd>
  );
}

function QAItem(props) {
  return React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      isOpen: props.isOpen,
      onToggle: props.onToggle
    });
  });
}

FAQ.QAItem = QAItem;
FAQ.Question = Question;
FAQ.Answer = Answer;

export default FAQ;
