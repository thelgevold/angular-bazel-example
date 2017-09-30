
import { Cmp9066Component } from './cmp';
describe('Cmp9066Component', () => {
  it('should add', () => {
    expect(new Cmp9066Component().add9066(1)).toBe(9067);
  });
});