
import { Cmp8710Component } from './cmp';
describe('Cmp8710Component', () => {
  it('should add', () => {
    expect(new Cmp8710Component().add8710(1)).toBe(8711);
  });
});