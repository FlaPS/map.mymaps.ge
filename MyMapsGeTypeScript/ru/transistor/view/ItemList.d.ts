/// <reference path="../model/ItemVO.d.ts" />
declare class ItemList extends polymer.Base implements polymer.Element {
    static ADD_TRIGGERED: string;
    static REMOVE_TRIGGERED: string;
    static UPDATE_TRIGGERED: string;
    onAddTriggered(): void;
    private scrollToBottom();
    onUpdateTriggered(): void;
    onRemoveTriggered(): void;
    dataProvider: Array<any>;
    name: string;
    quantity: number;
    price: number;
    newEnabled: boolean;
    uname: string;
    uquantity: number;
    uprice: number;
    usum: number;
    editEnabled: boolean;
    updateSumChanged(newUprice: any, newUquantity: any): void;
    editMode: boolean;
    selectedItem: ItemVO;
    onSelect(e: any, detail: any, sender: any): void;
    private checkSelect(e?);
    addValidate(price: any, quantity: any, name: any): void;
    editValidate(price: any, quantity: any, name: any): void;
    getItemIndexById(id: number): number;
}
