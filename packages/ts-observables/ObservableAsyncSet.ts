import { CancellationToken } from "@alumis/ts-async/CancellationToken";
import { OperationCancelledError } from "@alumis/ts-async/OperationCancelledError";

import { ObservableSet } from "./ObservableSet";
import { o } from "./ModifiableObservable";

export class ObservableAsyncSet<T> extends ObservableSet<T> {

    constructor(private loadAsync: (cancellationToken: CancellationToken) => Promise<Iterable<T>>) {
        super();
    }

    state = o<ObservableAsyncSetState>();

    private _doLoadPrimise: Promise<void>;

    ensureIsLoadedAsync() {

        return this._doLoadPrimise || (this._doLoadPrimise = this.doLoadAsync());
    }

    private _cancellationToken: CancellationToken;

    private async doLoadAsync() {

        this.state.value = { type: ObservableAsyncSetStateType.Loading  };

        let cancellationToken = this._cancellationToken = new CancellationToken();

        try {

            this.reconcile(await this.loadAsync(cancellationToken));
            cancellationToken.throwIfCancellationRequested();
        }

        catch (e) {

            if (e instanceof OperationCancelledError)
                return;

            this.state.value = { type: ObservableAsyncSetStateType.Error, error: e  };

            return;
        }

        finally {
            if (this._cancellationToken === cancellationToken)
                this._cancellationToken = null;
        }

        this.state.value = { type: ObservableAsyncSetStateType.Loaded  };
    }

    get value() {

        this.ensureIsLoadedAsync();

        let result = super.value;
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    has(value: T) {

        this.ensureIsLoadedAsync();

        let result = super.has(value);
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    [Symbol.iterator]() {

        this.ensureIsLoadedAsync();

        let result = super[Symbol.iterator]();
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    entries() {

        this.ensureIsLoadedAsync();

        let result = super.entries();
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    keys() {

        this.ensureIsLoadedAsync();

        let result = super.keys();
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    values() {

        this.ensureIsLoadedAsync();

        let result = super.values();
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    subscribe(action: (addedItems: T[], removedItems: T[]) => any) {

        this.ensureIsLoadedAsync();

        let result = super.subscribe(action);
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    subscribeSneakInLine(action: (addedItems: T[], removedItems: T[]) => any) {

        this.ensureIsLoadedAsync();

        let result = super.subscribeSneakInLine(action);
        let state = this.state.value;

        if (state.type === ObservableAsyncSetStateType.Error)
            throw state.error;

        return result;
    }

    dispose() {

        if (this._cancellationToken)
            this._cancellationToken.cancel();

        super.dispose();
    }
}

export interface ObservableAsyncSetState {
    
    type: ObservableAsyncSetStateType;
    error?;
}

export enum ObservableAsyncSetStateType {
    NotLoaded,
    Loading,
    Loaded,
    Error
}