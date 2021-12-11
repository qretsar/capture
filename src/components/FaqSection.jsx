import React from "react";
import styled from "styled-components";
import { About } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ </span>
      </h2>
      <div className="question">
        <h4>
          How Do I Start?
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, tenetur.
            </p>
          </div>
          <div className="faq-line"></div>
        </h4>
      </div>
      <div className="question">
        <h4>
          Daily Schedule?
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, tenetur.
            </p>
          </div>
          <div className="faq-line"></div>
        </h4>
      </div>
      <div className="question">
        <h4>
          Different Payment Methods?
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, tenetur.
            </p>
          </div>
          <div className="faq-line"></div>
        </h4>
      </div>
      <div className="question">
        <h4>
          What Products Do You Offer?
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, tenetur.
            </p>
          </div>
          <div className="faq-line"></div>
        </h4>
      </div>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-botton: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
