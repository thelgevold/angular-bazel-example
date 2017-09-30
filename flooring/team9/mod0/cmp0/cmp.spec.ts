
import { Cmp5900Component } from './cmp';
describe('Cmp5900Component', () => {
  it('should add', () => {
    expect(new Cmp5900Component().add5900(1)).toBe(5901);
  });
});