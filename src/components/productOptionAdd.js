export function ProductOption({
  checkCategory,
  delTag,
  newOption,
  setNewOption,
}) {
  const valueChange = (e) => {
    const { name, value } = e.target;
    setNewOption({ ...newOption, [name]: value });
    console.log(newOption);
  };
  return (
    <div className="boxWrap">
      <div className="box">
        <label htmlFor="color">color</label>
        <input type="text" name="color" onChange={valueChange} />
      </div>
      <div className="box">
        <label htmlFor="size">size</label>
        {checkCategory === "신발" ? (
          <select id="size" name="size" onChange={valueChange}>
            <option value="" disabled>
              size
            </option>
            <option value="240">240</option>
            <option value="245">245</option>
            <option value="250">250</option>
            <option value="255">255</option>
            <option value="260">260</option>
            <option value="265">265</option>
            <option value="270">270</option>
            <option value="275">275</option>
            <option value="280">280</option>
            <option value="285">285</option>
            <option value="290">290</option>
          </select>
        ) : (
          <select name="size" onChange={valueChange}>
            <option value="" default disabled>
              size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="Free">Free</option>
          </select>
        )}
      </div>
      <div className="box">
        <label htmlFor="stock">stock</label>
        <input type="number" name="stock" onChange={valueChange} />
      </div>
      <div className="delBtn">
        <button className="btn" onClick={delTag}>
          -
        </button>
      </div>
    </div>
  );
}
