
import { Cmp8059Component } from './cmp';
describe('Cmp8059Component', () => {
  it('should add', () => {
    expect(new Cmp8059Component().add8059(1)).toBe(8060);
  });
});