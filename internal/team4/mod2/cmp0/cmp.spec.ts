
import { Cmp8420Component } from './cmp';
describe('Cmp8420Component', () => {
  it('should add', () => {
    expect(new Cmp8420Component().add8420(1)).toBe(8421);
  });
});