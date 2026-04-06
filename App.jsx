function App() {
  const [showProductList, setShowProductList] = useState(false);
  return (
    <div className="App">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
