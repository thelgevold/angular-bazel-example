
import { Cmp9594Component } from './cmp';
describe('Cmp9594Component', () => {
  it('should add', () => {
    expect(new Cmp9594Component().add9594(1)).toBe(9595);
  });
});