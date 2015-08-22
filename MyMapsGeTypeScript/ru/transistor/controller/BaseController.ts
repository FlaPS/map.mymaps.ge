class BaseController extends ru.flaps.events.EventDispatcher
{
    public get context(): AppContext { return AppContext.instance }

    private _isRunning: boolean = false;

    private _view: any;
    public get view(): any
    {
        return this._view;
    }
   

    private _model: AppModel;
    public get model(): AppModel{
        return this._model;
    }

    public setUp(view: any, model: AppModel): void
    {
        this._view = view;
        this._model = model;
    }



    public start(): void
    {
        this._isRunning = true;
        this.view.style.display = 'block';
    }

    public stop(): void
    {
        this._isRunning = false;
        this.view.style.display =  'none';
    }

}