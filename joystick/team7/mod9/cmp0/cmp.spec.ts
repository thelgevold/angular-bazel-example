
import { Cmp9790Component } from './cmp';
describe('Cmp9790Component', () => {
  it('should add', () => {
    expect(new Cmp9790Component().add9790(1)).toBe(9791);
  });
});