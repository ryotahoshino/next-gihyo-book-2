export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const res = await fetch(resource, init)
  if(!res.ok) {
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'APIリクエストにエラーが発生しました'
    )

    throw error
  }
  return res.json()
}

export default fetcher

import React, { useState } from 'react';
import axios from 'axios';

interface FilterComponentProps {
    onFilter: (values: number[]) => void;
}

