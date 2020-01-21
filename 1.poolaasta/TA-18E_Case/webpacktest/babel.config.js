const presets = [
    [
      "@babel/env",
      {
        targets: "last 2 chrome major versions",
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };