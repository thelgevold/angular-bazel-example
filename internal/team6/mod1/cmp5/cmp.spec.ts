
import { Cmp8615Component } from './cmp';
describe('Cmp8615Component', () => {
  it('should add', () => {
    expect(new Cmp8615Component().add8615(1)).toBe(8616);
  });
});