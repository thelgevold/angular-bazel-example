
import { Cmp9599Component } from './cmp';
describe('Cmp9599Component', () => {
  it('should add', () => {
    expect(new Cmp9599Component().add9599(1)).toBe(9600);
  });
});