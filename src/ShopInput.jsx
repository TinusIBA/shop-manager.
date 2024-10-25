function ShopInput(){
    return(
        <>
        <form>
            <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="Tilføj en ny butik"
            />
            <button type="submit">Tilføj butik</button>
        </form>

        <form>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tilføj en ny vare"
            />

            {/*Valg af afdeling*/}
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
            >
                <option value="" disabled hidden>Vælg afdeling</option>
                <option value="frugt/grønt">Frugt/Grønt</option>
                <option value="brød">Brød</option>
                <option value="kød">Kød</option>
                <option value="konserves">Konserves</option>
                <option value="nonfood">NonFood</option>
                <option value="mejeri">Mejeri</option>
                <option value="frost">Frost</option>
            </select>

            {/*Valg af butik*/}
            <select
                value={selectedShop}
                onChange={(e) => setSelectedSHop(e.target.value)}
                required
            >
                <option value="" disabled hidden>Vælg butik</option>
                {shops.map((shop, index) =>(
                    <option key={index} value={shop}>{shop}</option>
                ))}

            </select>

            <button type="submit">Tilføj</button>
        </form>
        </>
    );
}

export default ShopInput;