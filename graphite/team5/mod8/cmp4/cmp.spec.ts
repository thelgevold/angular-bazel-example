
import { Cmp6584Component } from './cmp';
describe('Cmp6584Component', () => {
  it('should add', () => {
    expect(new Cmp6584Component().add6584(1)).toBe(6585);
  });
});