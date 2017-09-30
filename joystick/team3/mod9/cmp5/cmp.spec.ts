
import { Cmp9395Component } from './cmp';
describe('Cmp9395Component', () => {
  it('should add', () => {
    expect(new Cmp9395Component().add9395(1)).toBe(9396);
  });
});