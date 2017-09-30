
import { Cmp6307Component } from './cmp';
describe('Cmp6307Component', () => {
  it('should add', () => {
    expect(new Cmp6307Component().add6307(1)).toBe(6308);
  });
});