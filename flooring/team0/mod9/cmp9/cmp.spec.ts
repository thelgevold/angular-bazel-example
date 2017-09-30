
import { Cmp5099Component } from './cmp';
describe('Cmp5099Component', () => {
  it('should add', () => {
    expect(new Cmp5099Component().add5099(1)).toBe(5100);
  });
});