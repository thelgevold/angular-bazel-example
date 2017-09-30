
import { Cmp6999Component } from './cmp';
describe('Cmp6999Component', () => {
  it('should add', () => {
    expect(new Cmp6999Component().add6999(1)).toBe(7000);
  });
});