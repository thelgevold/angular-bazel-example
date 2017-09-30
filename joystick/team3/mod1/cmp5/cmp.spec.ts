
import { Cmp9315Component } from './cmp';
describe('Cmp9315Component', () => {
  it('should add', () => {
    expect(new Cmp9315Component().add9315(1)).toBe(9316);
  });
});