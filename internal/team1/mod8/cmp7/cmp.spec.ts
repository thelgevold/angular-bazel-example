
import { Cmp8187Component } from './cmp';
describe('Cmp8187Component', () => {
  it('should add', () => {
    expect(new Cmp8187Component().add8187(1)).toBe(8188);
  });
});