
import { Cmp9397Component } from './cmp';
describe('Cmp9397Component', () => {
  it('should add', () => {
    expect(new Cmp9397Component().add9397(1)).toBe(9398);
  });
});