'use client';

import { Suspense } from 'react';
import MetaPixel from './MetaPixel';

// Wrap dengan Suspense karena useSearchParams butuh Suspense boundary
export default function MetaPixelWrapper() {
  return (
    <Suspense fallback={null}>
      <MetaPixel />
    </Suspense>
  );
}
