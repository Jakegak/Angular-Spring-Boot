import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticationServiceService } from './hardcoded-authentication-service.service';

describe('HardcodedAuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthenticationServiceService = TestBed.get(HardcodedAuthenticationServiceService);
    expect(service).toBeTruthy();
  });
});
