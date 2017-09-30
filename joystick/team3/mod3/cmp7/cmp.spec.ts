
import { Cmp9337Component } from './cmp';
describe('Cmp9337Component', () => {
  it('should add', () => {
    expect(new Cmp9337Component().add9337(1)).toBe(9338);
  });
});