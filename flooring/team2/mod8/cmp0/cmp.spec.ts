
import { Cmp5280Component } from './cmp';
describe('Cmp5280Component', () => {
  it('should add', () => {
    expect(new Cmp5280Component().add5280(1)).toBe(5281);
  });
});