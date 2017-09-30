
import { Cmp6081Component } from './cmp';
describe('Cmp6081Component', () => {
  it('should add', () => {
    expect(new Cmp6081Component().add6081(1)).toBe(6082);
  });
});