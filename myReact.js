const MyReact = {
  createElement: (type, props, ...children) => {
    return { type, props: props || {}, children };
  }
};

export default MyReact;