const getForm = (title, subTitle, children) => {
  return (
    <div className="form">
      <div className="title">{title}</div>
      <div className="subtitle">{subTitle}</div>
      {children}
    </div>
  );
};

export { getForm };
