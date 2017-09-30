
import { Cmp9311Component } from './cmp';
describe('Cmp9311Component', () => {
  it('should add', () => {
    expect(new Cmp9311Component().add9311(1)).toBe(9312);
  });
});