
import { Cmp9303Component } from './cmp';
describe('Cmp9303Component', () => {
  it('should add', () => {
    expect(new Cmp9303Component().add9303(1)).toBe(9304);
  });
});