import React from 'react'
import TestComponent from './TestComponent'
import styles from './TestComponent.module.scss';
export default function All() {
  return (
    <div className={styles.styles1}>
      <TestComponent></TestComponent>
    </div>
  )
}
