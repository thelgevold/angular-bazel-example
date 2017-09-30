
import { Cmp5472Component } from './cmp';
describe('Cmp5472Component', () => {
  it('should add', () => {
    expect(new Cmp5472Component().add5472(1)).toBe(5473);
  });
});