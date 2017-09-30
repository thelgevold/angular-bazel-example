
import { Cmp8253Component } from './cmp';
describe('Cmp8253Component', () => {
  it('should add', () => {
    expect(new Cmp8253Component().add8253(1)).toBe(8254);
  });
});