
import { Cmp9204Component } from './cmp';
describe('Cmp9204Component', () => {
  it('should add', () => {
    expect(new Cmp9204Component().add9204(1)).toBe(9205);
  });
});