export default class Section {
    constructor({ itemRender }, containerSelector) {
        this._itemRender = itemRender;
        this._containerSelector = containerSelector;
    }

    renderItems(items) {
        items.forEach((item) => {
            this._itemRender(item);
        });
    }

    addItem(element) {
        this._containerSelector.prepend(element);
    }
}