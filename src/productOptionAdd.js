export function ProductOption({checkCategory, valueChange}) {
    return(
        <>
        <div className="wrap stock">
              <h2 className="title">옵션</h2>
              <div className="boxWrap">
                <div className="box">
                  <label htmlFor="color">color</label>
                  <input type="text" name="color" onChange={valueChange} />
                </div>
                <div className="box">
                  <label htmlFor="size">size</label>
                  {checkCategory === "신발" ? (
                    <select id="size" name="size" onChange={valueChange}>
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
                      <option value="85">85</option>
                      <option value="90">90</option>
                      <option value="95">95</option>
                      <option value="100">100</option>
                      <option value="105">105</option>
                      <option value="110">110</option>
                    </select>
                  )}
                </div>
                <div className="box">
                  <label htmlFor="stock">stock</label>
                  <input type="number" name="stock" onChange={valueChange} />
                </div>
              </div>
            </div>
        </>
    )
}