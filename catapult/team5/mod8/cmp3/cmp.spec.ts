
import { Cmp2583Component } from './cmp';
describe('Cmp2583Component', () => {
  it('should add', () => {
    expect(new Cmp2583Component().add2583(1)).toBe(2584);
  });
});