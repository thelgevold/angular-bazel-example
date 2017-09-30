
import { Cmp8208Component } from './cmp';
describe('Cmp8208Component', () => {
  it('should add', () => {
    expect(new Cmp8208Component().add8208(1)).toBe(8209);
  });
});