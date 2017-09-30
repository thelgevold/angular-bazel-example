
import { Cmp6132Component } from './cmp';
describe('Cmp6132Component', () => {
  it('should add', () => {
    expect(new Cmp6132Component().add6132(1)).toBe(6133);
  });
});