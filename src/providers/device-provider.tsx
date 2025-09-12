'use client';

import { createContext, ReactNode, useContext } from 'react';

import { IDeviceContextProps } from '@/types/context/device-context';

const DeviceContext = createContext<IDeviceContextProps | null>(null);

export const DeviceProvider = ({
  children,
  serverProps
}: {
  children: ReactNode;
  serverProps: IDeviceContextProps;
}) => {
  return (
    <DeviceContext.Provider value={serverProps}>
      {children}
    </DeviceContext.Provider>
  );
};

export function useDeviceProvider() {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error('useDeviceProvider must be used within DeviceProvider');
  }

  return context;
}
