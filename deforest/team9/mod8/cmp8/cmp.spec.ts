
import { Cmp3988Component } from './cmp';
describe('Cmp3988Component', () => {
  it('should add', () => {
    expect(new Cmp3988Component().add3988(1)).toBe(3989);
  });
});