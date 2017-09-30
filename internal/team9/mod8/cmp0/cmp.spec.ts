
import { Cmp8980Component } from './cmp';
describe('Cmp8980Component', () => {
  it('should add', () => {
    expect(new Cmp8980Component().add8980(1)).toBe(8981);
  });
});