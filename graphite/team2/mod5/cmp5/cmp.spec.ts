
import { Cmp6255Component } from './cmp';
describe('Cmp6255Component', () => {
  it('should add', () => {
    expect(new Cmp6255Component().add6255(1)).toBe(6256);
  });
});