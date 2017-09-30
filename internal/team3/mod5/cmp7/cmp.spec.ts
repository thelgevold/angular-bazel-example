
import { Cmp8357Component } from './cmp';
describe('Cmp8357Component', () => {
  it('should add', () => {
    expect(new Cmp8357Component().add8357(1)).toBe(8358);
  });
});