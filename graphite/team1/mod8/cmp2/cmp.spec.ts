
import { Cmp6182Component } from './cmp';
describe('Cmp6182Component', () => {
  it('should add', () => {
    expect(new Cmp6182Component().add6182(1)).toBe(6183);
  });
});