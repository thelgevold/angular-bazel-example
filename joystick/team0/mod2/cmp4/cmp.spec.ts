
import { Cmp9024Component } from './cmp';
describe('Cmp9024Component', () => {
  it('should add', () => {
    expect(new Cmp9024Component().add9024(1)).toBe(9025);
  });
});