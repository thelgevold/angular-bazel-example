
import { Cmp5035Component } from './cmp';
describe('Cmp5035Component', () => {
  it('should add', () => {
    expect(new Cmp5035Component().add5035(1)).toBe(5036);
  });
});