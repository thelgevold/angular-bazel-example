
import { Cmp8053Component } from './cmp';
describe('Cmp8053Component', () => {
  it('should add', () => {
    expect(new Cmp8053Component().add8053(1)).toBe(8054);
  });
});