import { TestBed } from '@angular/core/testing';

import { TodoFacade } from './todo.facade';

describe('TodoFacadeService', () => {
  let service: TodoFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
