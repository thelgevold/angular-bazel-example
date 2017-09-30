
import { Cmp4988Component } from './cmp';
describe('Cmp4988Component', () => {
  it('should add', () => {
    expect(new Cmp4988Component().add4988(1)).toBe(4989);
  });
});