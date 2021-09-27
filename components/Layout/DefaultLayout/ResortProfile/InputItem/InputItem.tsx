import * as React from 'react';
import css from './InputItem.module.scss'



export const InputItem = (props) => {

  return (
    <div className={css.input_item}>
      <p className={css.input_label}>{props.label}</p>
      <input type='text' name={props.name} id='' placeholder={props.placeholder} />
    </div>
  )
}