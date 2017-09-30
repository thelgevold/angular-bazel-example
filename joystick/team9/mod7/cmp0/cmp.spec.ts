
import { Cmp9970Component } from './cmp';
describe('Cmp9970Component', () => {
  it('should add', () => {
    expect(new Cmp9970Component().add9970(1)).toBe(9971);
  });
});