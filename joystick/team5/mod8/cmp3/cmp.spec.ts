
import { Cmp9583Component } from './cmp';
describe('Cmp9583Component', () => {
  it('should add', () => {
    expect(new Cmp9583Component().add9583(1)).toBe(9584);
  });
});