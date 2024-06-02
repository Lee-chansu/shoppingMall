export function ProductOption({
  checkCategory,
  newOption,
  setNewOption,
  idx,
  count,
  setCount,
}) {
  const addTag = e => {
    e.preventDefault();
    setCount(count + 1);
  };
  const valueChange = e => {
    const newOptions = [...newOption];
    const { name, value } = e.target;
    const updateOption = { ...newOptions[idx], [name]: value };
    newOptions[idx] = updateOption;
    setNewOption(newOptions);
  };

  const delTag = e => {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
      const newOptions = [...newOption];
      const { index } = e.target.dataset;
      newOptions.splice(index, 1);
      setNewOption(newOptions);
    } else {
      return;
    }
  };

  return (
    <>
      <h2 className="categoryTitle">
        옵션
        <button className="btn" onClick={addTag}>
          +
        </button>
      </h2>
      <div className="boxWrap">
        <div className="box">
          <label htmlFor={`color` + idx}>color</label>
          <input
            type="text"
            id={`color` + idx}
            name="color"
            onChange={valueChange}
          />
        </div>
        <div className="box">
          <label htmlFor={`size` + idx}>size</label>
          {checkCategory === "신발" ? (
            <select
              id={`size` + idx}
              name="size"
              defaultValue={""}
              onChange={valueChange}
            >
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
          ) : checkCategory === "악세사리" ? (
            <select
              id={`size` + idx}
              name="size"
              defaultValue={""}
              onChange={valueChange}
            >
              <option value="" disabled>
                size
              </option>
              <option value="acc">acc</option>
            </select>
          ) : (
            <select
              id={`size` + idx}
              name="size"
              defaultValue={""}
              onChange={valueChange}
            >
              <option value="" disabled>
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
          <label htmlFor={`stock` + idx}>stock</label>
          <input type="number" name="stock" onChange={valueChange} />
        </div>
        <div className="delBtn">
          <button className="btn" onClick={delTag} data-index={idx}>
            -
          </button>
        </div>
      </div>
    </>
  );
}

export function EditInfo({
  newOption,
  setNewOption,
  optionLength,
  setOptionLength,
  setCount,
  count,
  idx,
}) {
  const addTag = e => {
    e.preventDefault();
    setCount(count + 1);
  };
  const delTag = e => {
    e.preventDefault();
    if (optionLength > 1) {
      setOptionLength(optionLength - 1);
      const newOptions = [...newOption];
      const { index } = e.target.dataset;
      newOptions.splice(index, 1);
      setNewOption(newOptions);
    } else {
      return;
    }
  };
  const valueChange = e => {
    const newOptions = [...newOption];
    const { name, value } = e.target;
    const updateOption = { ...newOptions[idx], [name]: value };
    newOptions[idx] = updateOption;
    setNewOption(newOptions);
  };
  return (
    <>
      <h2 className="categoryTitle">
        옵션
        <button className="btn" onClick={addTag}>
          +
        </button>
      </h2>

      <div className="boxWrap">
        <div className="box">
          <label htmlFor="color">color</label>
          <select defaultValue="" className="select" name="color">
            <option value={newOption[idx].color}>{newOption[idx].color}</option>
          </select>
        </div>
        <div className="box">
          <label htmlFor="size">size</label>
          <select defaultValue="" className="select" name="size">
            <option value={newOption[idx].size}>{newOption[idx].size}</option>
          </select>
        </div>
        <div className="box">
          <label htmlFor="stock">stock</label>
          <input
            type="number"
            name="stock"
            value={newOption[idx].stock}
            onChange={valueChange}
          />
        </div>
        <div className="delBtn">
          <button className="btn" onClick={delTag} data-index={idx}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
