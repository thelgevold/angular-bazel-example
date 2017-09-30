
import { Cmp6862Component } from './cmp';
describe('Cmp6862Component', () => {
  it('should add', () => {
    expect(new Cmp6862Component().add6862(1)).toBe(6863);
  });
});