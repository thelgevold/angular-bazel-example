
import { Cmp9212Component } from './cmp';
describe('Cmp9212Component', () => {
  it('should add', () => {
    expect(new Cmp9212Component().add9212(1)).toBe(9213);
  });
});