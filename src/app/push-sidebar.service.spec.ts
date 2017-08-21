import { TestBed, inject } from '@angular/core/testing';

import { PushSidebarService } from './push-sidebar.service';

describe('PushSidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushSidebarService]
    });
  });

  it('should be created', inject([PushSidebarService], (service: PushSidebarService) => {
    expect(service).toBeTruthy();
  }));
});
