
import { Cmp6678Component } from './cmp';
describe('Cmp6678Component', () => {
  it('should add', () => {
    expect(new Cmp6678Component().add6678(1)).toBe(6679);
  });
});