
import { Cmp5721Component } from './cmp';
describe('Cmp5721Component', () => {
  it('should add', () => {
    expect(new Cmp5721Component().add5721(1)).toBe(5722);
  });
});