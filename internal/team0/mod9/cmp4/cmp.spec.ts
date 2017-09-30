
import { Cmp8094Component } from './cmp';
describe('Cmp8094Component', () => {
  it('should add', () => {
    expect(new Cmp8094Component().add8094(1)).toBe(8095);
  });
});