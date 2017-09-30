
import { Cmp5273Component } from './cmp';
describe('Cmp5273Component', () => {
  it('should add', () => {
    expect(new Cmp5273Component().add5273(1)).toBe(5274);
  });
});