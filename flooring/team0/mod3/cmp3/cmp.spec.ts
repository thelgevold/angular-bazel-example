
import { Cmp5033Component } from './cmp';
describe('Cmp5033Component', () => {
  it('should add', () => {
    expect(new Cmp5033Component().add5033(1)).toBe(5034);
  });
});