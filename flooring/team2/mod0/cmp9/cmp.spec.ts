
import { Cmp5209Component } from './cmp';
describe('Cmp5209Component', () => {
  it('should add', () => {
    expect(new Cmp5209Component().add5209(1)).toBe(5210);
  });
});