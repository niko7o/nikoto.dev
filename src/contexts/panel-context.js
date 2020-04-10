import React from 'react';

const PanelContext = React.createContext();

export const PanelProvider = PanelContext.Provider
export const PanelConsumer = PanelContext.Consumer

export default PanelContext;