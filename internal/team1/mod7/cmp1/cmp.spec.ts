
import { Cmp8171Component } from './cmp';
describe('Cmp8171Component', () => {
  it('should add', () => {
    expect(new Cmp8171Component().add8171(1)).toBe(8172);
  });
});