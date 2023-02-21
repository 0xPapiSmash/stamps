/* eslint-disable import/extensions */
import React from 'react';
import FrameComponent from '../../src/components/FrameComponent';
import QuickMintComponent from '../../src/components/QuickMintComponent';
import HeaderComponent from '../../components/HeaderComponent.tsx';

export default function QuickMint() {
  return (
    <div>
      <HeaderComponent />

      <FrameComponent>
        <QuickMintComponent />
      </FrameComponent>
    </div>
  );
}
