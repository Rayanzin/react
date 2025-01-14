const Patchs = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route patch="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Patchs;
