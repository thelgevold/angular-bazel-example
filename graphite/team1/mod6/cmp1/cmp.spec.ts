
import { Cmp6161Component } from './cmp';
describe('Cmp6161Component', () => {
  it('should add', () => {
    expect(new Cmp6161Component().add6161(1)).toBe(6162);
  });
});