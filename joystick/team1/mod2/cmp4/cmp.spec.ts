
import { Cmp9124Component } from './cmp';
describe('Cmp9124Component', () => {
  it('should add', () => {
    expect(new Cmp9124Component().add9124(1)).toBe(9125);
  });
});