
import { Cmp9530Component } from './cmp';
describe('Cmp9530Component', () => {
  it('should add', () => {
    expect(new Cmp9530Component().add9530(1)).toBe(9531);
  });
});