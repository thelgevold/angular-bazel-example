
import { Cmp9015Component } from './cmp';
describe('Cmp9015Component', () => {
  it('should add', () => {
    expect(new Cmp9015Component().add9015(1)).toBe(9016);
  });
});