
import { Cmp8589Component } from './cmp';
describe('Cmp8589Component', () => {
  it('should add', () => {
    expect(new Cmp8589Component().add8589(1)).toBe(8590);
  });
});