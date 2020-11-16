class Thick {

    constructor(best_ask,
                best_bid,
                high_24h,
                last_size,
                low_24h,
                open_24h,
                price,
                product_id,
                sequence,
                side,
                time,
                trade_id,
                type,
                volume_24h,
                volume_30d) {

        this._best_ask = best_ask;
        this._best_bid = best_bid;
        this._high_24h = high_24h;
        this._last_size = last_size;
        this._low_24h = low_24h;
        this._open_24h = open_24h;
        this._price = price;
        this._product_id = product_id;
        this._sequence = sequence;
        this._side = side;
        this._time = time;
        this._trade_id = trade_id;
        this._type = type;
        this._volume_24h = volume_24h;
        this._volume_30d = volume_30d;

    }
    get best_ask() {
        return this._best_ask;
    }

    set best_ask(value) {
        this._best_ask = value;
    }

    get best_bid() {
        return this._best_bid;
    }

    set best_bid(value) {
        this._best_bid = value;
    }

    get high_24h() {
        return this._high_24h;
    }

    set high_24h(value) {
        this._high_24h = value;
    }

    get last_size() {
        return this._last_size;
    }

    set last_size(value) {
        this._last_size = value;
    }

    get low_24h() {
        return this._low_24h;
    }

    set low_24h(value) {
        this._low_24h = value;
    }

    get open_24h() {
        return this._open_24h;
    }

    set open_24h(value) {
        this._open_24h = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get product_id() {
        return this._product_id;
    }

    set product_id(value) {
        this._product_id = value;
    }

    get sequence() {
        return this._sequence;
    }

    set sequence(value) {
        this._sequence = value;
    }

    get side() {
        return this._side;
    }

    set side(value) {
        this._side = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }

    get trade_id() {
        return this._trade_id;
    }

    set trade_id(value) {
        this._trade_id = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get volume_24h() {
        return this._volume_24h;
    }

    set volume_24h(value) {
        this._volume_24h = value;
    }

    get volume_30d() {
        return this._volume_30d;
    }

    set volume_30d(value) {
        this._volume_30d = value;
    }

}

export default Thick;