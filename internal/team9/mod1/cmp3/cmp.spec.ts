
import { Cmp8913Component } from './cmp';
describe('Cmp8913Component', () => {
  it('should add', () => {
    expect(new Cmp8913Component().add8913(1)).toBe(8914);
  });
});