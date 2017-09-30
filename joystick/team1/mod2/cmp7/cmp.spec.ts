
import { Cmp9127Component } from './cmp';
describe('Cmp9127Component', () => {
  it('should add', () => {
    expect(new Cmp9127Component().add9127(1)).toBe(9128);
  });
});