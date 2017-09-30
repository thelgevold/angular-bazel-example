
import { Cmp8324Component } from './cmp';
describe('Cmp8324Component', () => {
  it('should add', () => {
    expect(new Cmp8324Component().add8324(1)).toBe(8325);
  });
});