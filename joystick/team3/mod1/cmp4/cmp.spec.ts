
import { Cmp9314Component } from './cmp';
describe('Cmp9314Component', () => {
  it('should add', () => {
    expect(new Cmp9314Component().add9314(1)).toBe(9315);
  });
});