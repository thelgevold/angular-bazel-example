
import { Cmp3643Component } from './cmp';
describe('Cmp3643Component', () => {
  it('should add', () => {
    expect(new Cmp3643Component().add3643(1)).toBe(3644);
  });
});