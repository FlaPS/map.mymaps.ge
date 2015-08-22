declare class BaseController extends ru.flaps.events.EventDispatcher {
    context: AppContext;
    private _isRunning;
    private _view;
    view: any;
    private _model;
    model: AppModel;
    setUp(view: any, model: AppModel): void;
    start(): void;
    stop(): void;
}
