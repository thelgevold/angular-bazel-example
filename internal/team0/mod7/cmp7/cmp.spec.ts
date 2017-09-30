
import { Cmp8077Component } from './cmp';
describe('Cmp8077Component', () => {
  it('should add', () => {
    expect(new Cmp8077Component().add8077(1)).toBe(8078);
  });
});