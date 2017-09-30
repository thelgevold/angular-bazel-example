
import { Cmp7622Component } from './cmp';
describe('Cmp7622Component', () => {
  it('should add', () => {
    expect(new Cmp7622Component().add7622(1)).toBe(7623);
  });
});