
import { Cmp8487Component } from './cmp';
describe('Cmp8487Component', () => {
  it('should add', () => {
    expect(new Cmp8487Component().add8487(1)).toBe(8488);
  });
});