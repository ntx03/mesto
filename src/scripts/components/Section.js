export default class Section {
    constructor({ itemRender }, container) {
        this._itemRender = itemRender;
        this._container = container;
    }

    renderItems(items) {
        items.forEach((item) => {
            this._itemRender(item);
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }
}