
import { Cmp9775Component } from './cmp';
describe('Cmp9775Component', () => {
  it('should add', () => {
    expect(new Cmp9775Component().add9775(1)).toBe(9776);
  });
});