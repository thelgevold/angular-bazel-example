
import { Cmp8346Component } from './cmp';
describe('Cmp8346Component', () => {
  it('should add', () => {
    expect(new Cmp8346Component().add8346(1)).toBe(8347);
  });
});