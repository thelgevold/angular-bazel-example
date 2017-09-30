
import { Cmp8144Component } from './cmp';
describe('Cmp8144Component', () => {
  it('should add', () => {
    expect(new Cmp8144Component().add8144(1)).toBe(8145);
  });
});