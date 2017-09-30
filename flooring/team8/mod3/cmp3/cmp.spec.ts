
import { Cmp5833Component } from './cmp';
describe('Cmp5833Component', () => {
  it('should add', () => {
    expect(new Cmp5833Component().add5833(1)).toBe(5834);
  });
});