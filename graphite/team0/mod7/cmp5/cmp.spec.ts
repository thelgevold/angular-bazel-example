
import { Cmp6075Component } from './cmp';
describe('Cmp6075Component', () => {
  it('should add', () => {
    expect(new Cmp6075Component().add6075(1)).toBe(6076);
  });
});