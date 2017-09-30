
import { Cmp9087Component } from './cmp';
describe('Cmp9087Component', () => {
  it('should add', () => {
    expect(new Cmp9087Component().add9087(1)).toBe(9088);
  });
});