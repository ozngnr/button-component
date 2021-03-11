import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>Icons: https://material.io/resources/icons/?style=round</p>
      <p class="copywrite">created by <span><a href="https://github.com/ozngnr">ozngnr</a></span> - devChallenges.io</p>
    </footer>
  )
}