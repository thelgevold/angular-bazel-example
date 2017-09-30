
import { Cmp5963Component } from './cmp';
describe('Cmp5963Component', () => {
  it('should add', () => {
    expect(new Cmp5963Component().add5963(1)).toBe(5964);
  });
});