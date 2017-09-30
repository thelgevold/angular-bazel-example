
import { Cmp9629Component } from './cmp';
describe('Cmp9629Component', () => {
  it('should add', () => {
    expect(new Cmp9629Component().add9629(1)).toBe(9630);
  });
});