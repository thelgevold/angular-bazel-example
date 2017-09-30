
import { Cmp5395Component } from './cmp';
describe('Cmp5395Component', () => {
  it('should add', () => {
    expect(new Cmp5395Component().add5395(1)).toBe(5396);
  });
});