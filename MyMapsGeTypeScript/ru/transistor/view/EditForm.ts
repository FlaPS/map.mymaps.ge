/// <reference path="../model/ItemVO.ts" />
@component("edit-form")
class EditForm extends polymer.Base implements polymer.Element {

    
    public static UPDATE_TRIGGERED: string = 'updateTriggered';
    public static REMOVE_TRIGGERED: string = 'removeTriggered';


    @property({ type: String, value: '', notify: true, reflectToAttribute: true })
    public name: string = "";

    @property({ type: String, value: '', notify: true, reflectToAttribute: true })
    public quantity: string = "";

    @property({ type: String, value: '', notify: true, reflectToAttribute: true })
    public price: string = "";

    @observe("price,quantity")
    fullnameChanged(newPrice, newQuatity) {
        this.sum = newPrice * newQuatity;
    }

    @property({ type: Number, value: '', notify: true, reflectToAttribute: true })
    public sum: number = 0;

    public onUpdateTriggered(): void
    {
        this.fire(EditForm.UPDATE_TRIGGERED);
    }
    public onRemoveTriggered(): void
    {
        this.fire(EditForm.REMOVE_TRIGGERED);
    }
} 

EditForm.register();