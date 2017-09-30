
import { Cmp5713Component } from './cmp';
describe('Cmp5713Component', () => {
  it('should add', () => {
    expect(new Cmp5713Component().add5713(1)).toBe(5714);
  });
});