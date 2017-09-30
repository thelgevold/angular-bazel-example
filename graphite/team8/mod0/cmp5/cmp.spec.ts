
import { Cmp6805Component } from './cmp';
describe('Cmp6805Component', () => {
  it('should add', () => {
    expect(new Cmp6805Component().add6805(1)).toBe(6806);
  });
});