
import { Cmp6475Component } from './cmp';
describe('Cmp6475Component', () => {
  it('should add', () => {
    expect(new Cmp6475Component().add6475(1)).toBe(6476);
  });
});