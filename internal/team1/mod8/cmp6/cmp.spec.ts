
import { Cmp8186Component } from './cmp';
describe('Cmp8186Component', () => {
  it('should add', () => {
    expect(new Cmp8186Component().add8186(1)).toBe(8187);
  });
});