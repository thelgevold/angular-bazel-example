
import { Cmp6192Component } from './cmp';
describe('Cmp6192Component', () => {
  it('should add', () => {
    expect(new Cmp6192Component().add6192(1)).toBe(6193);
  });
});