
import { Cmp6603Component } from './cmp';
describe('Cmp6603Component', () => {
  it('should add', () => {
    expect(new Cmp6603Component().add6603(1)).toBe(6604);
  });
});