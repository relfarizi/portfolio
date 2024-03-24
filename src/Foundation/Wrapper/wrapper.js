import React from 'react';

import styles from './wrapper.styles';

import { Header, Body, Footer } from '../Container'

const Wrapper = () => {
  return (
    <div style={styles.wrapperContainer}>
      {/*<Header />*/}
      <Body />
      {/*<Footer />*/}
    </div>
  )
}

export default Wrapper;