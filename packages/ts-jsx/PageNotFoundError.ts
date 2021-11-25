export class PageNotFoundError extends Error {
    constructor(message = "A page was not found") {
        super(message);
        
    }
}