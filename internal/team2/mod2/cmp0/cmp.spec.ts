
import { Cmp8220Component } from './cmp';
describe('Cmp8220Component', () => {
  it('should add', () => {
    expect(new Cmp8220Component().add8220(1)).toBe(8221);
  });
});