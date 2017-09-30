
import { Cmp9321Component } from './cmp';
describe('Cmp9321Component', () => {
  it('should add', () => {
    expect(new Cmp9321Component().add9321(1)).toBe(9322);
  });
});