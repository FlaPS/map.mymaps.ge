/// <reference path="../model/ItemVO.d.ts" />
declare class EditForm extends polymer.Base implements polymer.Element {
    static UPDATE_TRIGGERED: string;
    static REMOVE_TRIGGERED: string;
    name: string;
    quantity: string;
    price: string;
    fullnameChanged(newPrice: any, newQuatity: any): void;
    sum: number;
    onUpdateTriggered(): void;
    onRemoveTriggered(): void;
}
