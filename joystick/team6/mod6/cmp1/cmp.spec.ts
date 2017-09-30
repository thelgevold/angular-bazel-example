
import { Cmp9661Component } from './cmp';
describe('Cmp9661Component', () => {
  it('should add', () => {
    expect(new Cmp9661Component().add9661(1)).toBe(9662);
  });
});