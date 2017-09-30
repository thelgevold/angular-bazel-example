
import { Cmp5558Component } from './cmp';
describe('Cmp5558Component', () => {
  it('should add', () => {
    expect(new Cmp5558Component().add5558(1)).toBe(5559);
  });
});