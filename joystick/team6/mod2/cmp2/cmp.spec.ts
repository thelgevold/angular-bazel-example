
import { Cmp9622Component } from './cmp';
describe('Cmp9622Component', () => {
  it('should add', () => {
    expect(new Cmp9622Component().add9622(1)).toBe(9623);
  });
});