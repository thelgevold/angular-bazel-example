
import { Cmp8064Component } from './cmp';
describe('Cmp8064Component', () => {
  it('should add', () => {
    expect(new Cmp8064Component().add8064(1)).toBe(8065);
  });
});