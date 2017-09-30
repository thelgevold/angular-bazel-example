
import { Cmp9115Component } from './cmp';
describe('Cmp9115Component', () => {
  it('should add', () => {
    expect(new Cmp9115Component().add9115(1)).toBe(9116);
  });
});