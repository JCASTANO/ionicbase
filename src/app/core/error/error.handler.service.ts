import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

    handleError(error: any): void {
        const dateNow = new Date().toISOString();
        if (error instanceof HttpErrorResponse) {
            console.error(dateNow, 'HTTP error: ', error.message);
        } else {
            console.error(dateNow, 'Client Error: ', error);
        }
    }
 }
