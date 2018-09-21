import React from 'react';
import '../styles/Calculator.css';

import Button from './Button';

export default ({ output, handleBtn }) => {
  return (
      <div className="calc-grid">
        <div className="calc-output">{output}</div>
        <Button handleBtn={handleBtn} val="AC" name="ac" typ="action"/>
        <Button handleBtn={handleBtn} val="<<" name="back" typ="action"/>
        <Button handleBtn={handleBtn} val="÷" name="divide" typ="operator"/>
        <Button handleBtn={handleBtn} val="7" name="seven" typ="number"/>
        <Button handleBtn={handleBtn} val="8" name="height" typ="number"/>
        <Button handleBtn={handleBtn} val="9" name="nine" typ="number"/>
        <Button handleBtn={handleBtn} val="x" name="multi" typ="operator"/>
        <Button handleBtn={handleBtn} val="4" name="four" typ="number"/>
        <Button handleBtn={handleBtn} val="5" name="five" typ="number"/>
        <Button handleBtn={handleBtn} val="6" name="six" typ="number"/>
        <Button handleBtn={handleBtn} val="-" name="minus" typ="operator"/>
        <Button handleBtn={handleBtn} val="1" name="one" typ="number"/>
        <Button handleBtn={handleBtn} val="2" name="two" typ="number"/>
        <Button handleBtn={handleBtn} val="3" name="three" typ="number"/>
        <Button handleBtn={handleBtn} val="+" name="plus" typ="operator"/>
        <Button handleBtn={handleBtn} val="0" name="zero" typ="number"/>
        <Button handleBtn={handleBtn} val="." name="dot" typ="number"/>
        <Button handleBtn={handleBtn} val="=" name="equal" typ="operator"/>
      </div>
  )
}
