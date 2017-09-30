
import { Cmp6077Component } from './cmp';
describe('Cmp6077Component', () => {
  it('should add', () => {
    expect(new Cmp6077Component().add6077(1)).toBe(6078);
  });
});