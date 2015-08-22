declare class ListController extends BaseController {
    setUp(view: any, model: AppModel): void;
    start(): void;
    private addHandler(e);
    private removeHandler(e);
    private updateHandler(e);
    stop(): void;
    private dataLoaded();
    private itemAdded(item);
    private itemRemoved(item);
    private itemUpdated(item);
}
