import Page from './../components/base-page.jsx';
import React from 'react';
import root from './root';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const PageCtx = injectDeps(Page);

  root(React, PageCtx, FlowRouter, mount);
};
